pragma solidity ^0.4.23;

import "../SharedStorage.sol";
import "../../Ownership/NotInitedOwnable.sol";


contract OwnableUpgradeableImplementation is SharedStorage, NotInitedOwnable {

    event UpgradedContract(address indexed _newImpl);

    function upgradeImplementation(address _newImpl) public onlyOwner {
        contractImplementation = _newImpl;
        emit UpgradedContract(_newImpl);
    }

    function getImplementation() public view returns (address) {
        return contractImplementation;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}