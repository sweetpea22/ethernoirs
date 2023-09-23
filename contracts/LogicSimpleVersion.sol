pragma solidity ^0.8.18;

contract Game {
    address public owner;
    uint256 public numberOfLevels;
    
    mapping(uint256 => mapping(address => uint256)) public playerChoices;

    constructor(uint256 _numberOfLevels) {
        owner = msg.sender;
        numberOfLevels = _numberOfLevels;
    }

    function makeChoice(uint256 level, uint256 choice) external public {
        require(level < numberOfLevels, "Invalid level");
        require(choice < 256, "Choice must be between 0 and 255");
        
        playerChoices[level][msg.sender] = choice;
    }
}




