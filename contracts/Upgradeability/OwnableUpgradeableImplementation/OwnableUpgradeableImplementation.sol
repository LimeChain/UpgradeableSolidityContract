pragma solidity ^0.4.23;

import "../SharedStorage.sol";
import "../../Ownership/NotInitedOwnable.sol";


contract OwnableUpgradeableImplementation is SharedStorage, NotInitedOwnable {

    /**
    * @dev Initializes the contract and inits with the msg sender as an owner
    * account.
    */
    function init() public {
        require(owner == address(0), "Contract already has owner");
        owner = msg.sender;
    }

    event UpgradedContract(address indexed _newImpl);

    function upgradeImplementation(address _newImpl) public onlyOwner {
        contractImplementation = _newImpl;
        UpgradedContract(_newImpl);
    }

    function getImplementation() public view returns (address) {
        return contractImplementation;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}