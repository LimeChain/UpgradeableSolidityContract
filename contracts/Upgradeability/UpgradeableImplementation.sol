pragma solidity 0.4.18;

import './SharedStorage.sol';

contract UpgradeableImplementation is SharedStorage {

	event UpgradedContract(address indexed newKernel);
    
    function upgradeImplementation(address _newImpl) external {
        contractImplementation = _newImpl;
        UpgradedContract(_newImpl);
    }
}