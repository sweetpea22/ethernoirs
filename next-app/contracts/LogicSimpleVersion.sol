pragma solidity ^0.8.19;
import '@openzeppelin/contracts/access/Ownable.sol';

contract SimpleLogic is Ownable {
    uint256 public numberOfLevels;
    
    mapping(uint256 => mapping(address => uint256)) public playerChoices;

    constructor(uint256 _numberOfLevels) {
        numberOfLevels = _numberOfLevels;
    }

    function setNumberOfLevels(uint256 _numberOfLevels) public onlyOwner {
        numberOfLevels = _numberOfLevels;
    }

    function makeChoice(uint256 level, uint256 choice) external {
        require(level < numberOfLevels, "Invalid level");
        require(choice < 256, "Choice must be between 0 and 255");
        
        playerChoices[level][msg.sender] = choice;
    }

   function getChoice(uint256 level, address player) public view returns (uint256) {
    require(level < numberOfLevels, "Invalid level");
    return playerChoices[level][player];
}

}




