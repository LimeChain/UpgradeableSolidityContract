pragma solidity 0.4.18;

import "./Upgradeability/UpgradeableImplementation.sol";

contract TestImpl1 is UpgradeableImplementation {
	bytes32 public contractName = "TestImpl1";
	uint public rate = 1000; 
}