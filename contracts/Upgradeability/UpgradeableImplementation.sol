pragma solidity ^0.4.23;

import './SharedStorage.sol';


contract UpgradeableImplementation is SharedStorage {

    event UpgradedContract(address indexed _newImpl);

    function upgradeImplementation(address _newImpl) public {
        contractImplementation = _newImpl;
        emit UpgradedContract(_newImpl);
    }
}