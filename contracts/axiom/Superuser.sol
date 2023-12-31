// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IAxiomV1Query.sol";

struct ResponseStruct {
    bytes32 keccakBlockResponse;
    bytes32 keccakAccountResponse;
    bytes32 keccakStorageResponse;
    IAxiomV1Query.BlockResponse[] blockResponses;
    IAxiomV1Query.AccountResponse[] accountResponses;
    IAxiomV1Query.StorageResponse[] storageResponses;
}

contract Superuser is ERC721Enumerable, Ownable {

    // define token 
	uint256 public currentTokenId;
    string baseURI;
    string public baseExtension = ".json";



    // conditions are extremely un-historical due to not having access to an account far back in the future. 
    uint256 public constant CHECK_START_BLOCK = 9743287;
    uint256 public constant CHECK_END_BLOCK = 9747915;
    uint256 public constant NUM_TX_THRESHOLD = 5;
    address public constant AXIOM_V1_QUERY_GOERLI_ADDR = 0x4Fb202140c5319106F15706b1A69E441c9536306;

    /// @notice True if the `account` has already claimed.
    mapping (address => bool) public hasMinted;

    error ProofError();
    error InvalidInputError();
    error InvalidSenderError();
    error InvalidDataLengthError();
    error NotEnoughTransactionsError();
    error AlreadyClaimedError();

    constructor() ERC721("Superuser", "SUP") {}

    /// @notice Validate axiomResponse and check that account meets conditions to mint NFT
    /// @param axiomResponse The Axiom query response.
    /// @dev Reverts if proof isn't valid, or if the account doesn't meet the conditions to mint.
    function _validateData(ResponseStruct calldata axiomResponse) private view {
        // Goerli AxiomV1Query address
        IAxiomV1Query axiomV1Query = IAxiomV1Query(AXIOM_V1_QUERY_GOERLI_ADDR);
        
        // Check that the responses are valid
        bool valid = axiomV1Query.areResponsesValid(
            axiomResponse.keccakBlockResponse,
            axiomResponse.keccakAccountResponse,
            axiomResponse.keccakStorageResponse,
            axiomResponse.blockResponses,
            axiomResponse.accountResponses,
            axiomResponse.storageResponses
        );
        if (!valid) {
            revert ProofError();
        }

        // Decode the query metadata 
        uint256 length = axiomResponse.accountResponses.length;
        if (length != 2) {
            revert InvalidDataLengthError();
        }

        // Get values from start block
        uint256 startBlockNumber = axiomResponse.accountResponses[0].blockNumber;
        uint256 startNonce = axiomResponse.accountResponses[0].nonce;
        address startAddr = axiomResponse.accountResponses[0].addr;

        // Get values from end block
        uint256 endBlockNumber = axiomResponse.accountResponses[1].blockNumber;
        uint256 endNonce = axiomResponse.accountResponses[1].nonce;
        address endAddr = axiomResponse.accountResponses[1].addr;

        // Check that the start and end blocks proved match the values set in the contract
        if (startBlockNumber != CHECK_START_BLOCK || endBlockNumber != CHECK_END_BLOCK) {
            revert InvalidInputError();
        }

        // Check that the account nonce at the end of the bear market is a set threshold above the 
        // account nonce at the start of the bear market, since it acts as a transaction counter
        if (endNonce - startNonce < NUM_TX_THRESHOLD) {
            revert NotEnoughTransactionsError();
        }

        // Check that the proof submitted is for the same address that is submitting the transaction
        // Note, we are checking that you ARE the sender just for this demo. You'll likely want 
        // to revert if the sender is NOT the startAddr/endAddr.
        if (startAddr != msg.sender || endAddr != msg.sender) {
            revert InvalidSenderError();
        }
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    // prob should use strings lib
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

    

    function tokenURI(uint256 tokenId) 
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
        _exists(tokenId),
        "ERC721Metadata: URI query for nonexistent token"
        );
        

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, uintToStr(tokenId), baseExtension))
            : "";
    }

    
    function mint(ResponseStruct calldata response, uint256 _count) external {

        // Validates the incoming ResponseStruct
        _validateData(response);
        
        // commented out for demo purposes

        // require(isPlayer(msg.sender), "Please Register Player First"); // Check that this is somone playing the game.
        
        // Mints a new NFT to the sender if input validation passes
        // hasMinted[_msgSender()] = true;

        _mintToMulti(msg.sender, _count);
    }

    function _mintToMulti(address _to, uint256 _count) public returns (uint256) {
        uint256 startId = currentTokenId;
    
        for (uint256 i = 0; i < _count; i++) {
            _safeMint(_to, startId + i);
        }
        
        currentTokenId += _count;
        return startId;
    }
}