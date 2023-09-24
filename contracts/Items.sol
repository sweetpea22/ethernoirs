// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";



contract Items is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {

    uint256 public constant EMAIL = 0;
    uint256 public constant MEMO = 1;
    uint256 public constant LETTER = 1;
    string baseURI;



    function setBaseURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    constructor() ERC1155("https://ipfs.io/ipfs/QmdDLob2LjKPuMSKzs4DyUER1SdwyCGKxb393Xd8xnRD3u/{id}.json"
    ) {
        _mint(msg.sender, EMAIL, 100, "");
        _mint(msg.sender, MEMO, 100, "");
        _mint(msg.sender, LETTER, 100, "");
        baseURI = "https://ipfs.io/ipfs/QmdDLob2LjKPuMSKzs4DyUER1SdwyCGKxb393Xd8xnRD3u";

    }


    function transferTo(
        uint256 tokenId,
        address recipient
    ) external onlyOwner {
            _safeTransferFrom(msg.sender, recipient, tokenId, 1, "");
    }

    function mintTo(address _to, uint256 _count, uint256 _tokenId) 
        public 
    {
        _mint(_to,  _count, _tokenId, "");
    }

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