// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';


contract Logic is ERC1155, Ownable, ERC1155Supply {
  string public baseURI; // baseURI where token metadata is stored
  uint256 public totalSupply; // Total number of tokens minted
 
  // difficulty level will correspond to the amount of permissionless storybuilding we allot to the particular game.
  uint256 public constant EntropyLevel0 = 0;
  uint256 public constant EntropyLevel1 = 1;
  uint256 public constant EntropyLevel2 = 2;
  uint256 public constant EntropyLevel3 = 3;
  uint256 public constant EntropyLevel4 = 4;
  uint256 public constant EntropyLevel5 = 5;


  enum GameStatus{ STARTED, ENDED }


  struct Player {
    address playerAddress; /// @param playerAddress player wallet address
    uint256 playerScore; /// @param playerScore player score; affected by Game results
    bool isInActiveGame; /// @param isInActiveGame boolean to indicate if a player is in Game
  }

  struct Game {
    GameStatus gameStatus; /// @param gameStatus enum to indicate Game status
    string name; /// @param name Game name; set by game designer
    uint8[5] moves; /// @param moves uint array representing players' move
  }

  mapping(address => uint256) public playerInfo; // Mapping of player addresses to player index in the players array
  Player[] public players; // Array of players


  mapping(string => uint256) public gameInfo; // Mapping of Game name to Game index in the Games array
  Game[] public Games; // Array of Games

  function isPlayer(address addr) public view returns (bool) {
    if(players[addr] == 0) {
      return false;
    } else {
      return true;
    }
  }

  // player functions 
  function getPlayer(address addr) public view returns (Player memory) {
    require(isPlayer(addr), "Player doesn't exist!");
    return players[addr];
  }

  function getAllPlayers() public view returns (Player[] memory) {
    return players;
  }


  // Game getter function
  function isGame(string memory _name) public view returns (bool) {
    if(gameInfo[_name] == 0) {
      return false;
    } else {
      return true;
    }
  }

  function getGame(string memory _name) public view returns (Game memory) {
    require(isGame(_name), "Game doesn't exist!");
    return games[gameInfo[_name]];
  }

  function getAllGames() public view returns (Game[] memory) {
    return games;
  }

  function updateGame(string memory _name, Game memory _game) private {
    require(isGame(_name), "Game doesn't exist");
    games[gameInfo[_name]] = _game;
  }

  // Events
  event NewPlayer(address indexed owner);
  event NewGame(string gameName);
  event Solved(string gameName);
  event GameMove(string indexed gameName);

  /// @dev Initializes the contract by setting a `metadataURI` to the token collection
  /// @param _metadataURI baseURI where token metadata is stored
  constructor(string memory _metadataURI) ERC1155(_metadataURI) {
    baseURI = _metadataURI; // Set baseURI
    initialize();
  }

  function setURI(string memory newuri) public onlyOwner {
    _setURI(newuri);
  }

  function initialize() private {
    players.push(Player(address(0), 0, false));
  }

"players[3-1] = 0xfdsfdsfs..."

  /// @dev Registers a player
  /// @param _name player name; set by player
  function registerPlayer(address memory _addr) external {
    require(!isPlayer(msg.sender), "Player already registered"); // Require that player is not already registered
    
    // the index of the player == the # of the player at signup.
    uint256 _id = players.length;
    players.push(Player(msg.sender, 0, false)); // Adds player to players array
    playerInfo[msg.sender] = _id; // Creates player info mapping
    
    emit NewPlayer(msg.sender); // Emits NewPlayer event
  }

  /// @dev Creates a new game
  function createNewGame(string memory _name) onlyOwner returns (Game memory) {
    require(!isGame(_name), "Game already exists!"); // Require game with same name should not exist
    
    Game memory _game = Game(
      GameStatus.STARTED, // Game pending
      _name, // Game name
      [0, 0, 0, 0, 0], // moves for each player
    );

    uint256 _id = games.length;
    gameInfo[_name] = _id;
    games.push(_game);
    
    return _game;
  }

  //read moves
  function getGameMoves(string memory _gameName) public view returns (uint256 playerMove) {
    Game memory _game = getGame(_gameName);

    playerMove = _game.moves[0];

    return (playerMove);
  }

  function _registerPlayerMove(uint256 _player, uint8 _choice, string memory _gameName) internal {
    require(_choice == 1 || _choice == 2, "Choice should be either 1 or 2!");
    // hmm...notsure that this would work.
    games[gameInfo].moves[_player] = _choice;
  }

  // User chooses attack or defense move for battle card
  function userChoice(uint8 _choice, string memory _gameName) external {
    Game memory _game = getGame(_gameName);

    require(
        _game.gameStatus == GameStatus.STARTED,
        "Game not started. Please tell another player to join the game"
    ); // Require that game has started
    require(
        _game.gameStatus != GameStatus.ENDED,
        "Game has already ended"
    ); // Require that game has not ended
    require(
      msg.sender == _game.players[0] || msg.sender == _game.players[1],
      "You are not in this game"
    ); // Require that player is in the game

    require(_game.moves[_game.players[0] == msg.sender ? 0 : 1] == 0, "You have already made a move!");

    _registerPlayerMove(_game.players[0] == msg.sender ? 0 : 1, _choice, _gameName);

    _game = getGame(_gameName);

    //optional: can think of how many moves in the game are left.
    // uint _movesLeft = 2 - (_game.moves[0] == 0 ? 0 : 1) - (_game.moves[1] == 0 ? 0 : 1);
    // emit GameMove(_gameName, _movesLeft == 1 ? true : false);
    
    // if(_movesLeft == 0) {
    //   _awaitGameResult(_gameName);
    // }
  }

  // Awaits battle results
  // function _awaitGameResult(string memory _gameName) internal {
  //   Game memory _game = getGame(_gameName);

  //   _resolveGame(_battle);
  // }

  /// @dev This function resets the game
  // function _resolveGame(Game memory _gameinternal) {
    
  //   // Reset moves to 0
  //   _game.moves[0] = 0;
  //   updateGame(_game.name, _game);

  }

// reset when done
  // function endGame(address gameEnder, Game memory _game) internal returns (Game memory) {
  //   require(_game.gameStatus != GameStatus.ENDED, "Game already ended"); // Require that game has not ended

  //   _game.gameStatus = GameStatus.ENDED;
  //   _game.solvedBy = gameEnder;
  //   updateGame(_game.name, _game);

  //   uint player = playerInfo[_game.players[0]];
  

  //   players[player].isInActiveGame = false;
  //   players[player].playerHealth = 10;

  //   emit GameSolved(_game.name); // Emits GameSolved event

  //   return _game;
  // }

  // Turns uint256 into string
  function uintToStr(uint256 _i) internal pure returns (string memory _uintAsString) {
    if (_i == 0) {
      return '0';
    }
    uint256 j = _i;
    uint256 len;
    while (j != 0) {
      len++;
      j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint256 k = len;
    while (_i != 0) {
      k = k - 1;
      uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
      bytes1 b1 = bytes1(temp);
      bstr[k] = b1;
      _i /= 10;
    }
    return string(bstr);
  }

  // Token URI getter function
  function tokenURI(uint256 tokenId) public view returns (string memory) {
    return string(abi.encodePacked(baseURI, '/', uintToStr(tokenId), '.json'));
  }

  // The following functions are overrides required by Solidity.
  function _beforeTokenTransfer(
    address operator,
    address from,
    address to,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
  ) internal override(ERC1155, ERC1155Supply) {
    super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
  }
}