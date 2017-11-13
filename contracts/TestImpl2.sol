pragma solidity 0.4.18;

import "./Upgradeability/UpgradeableImplementation.sol";

contract TestImpl2 is UpgradeableImplementation {
	bytes32 public contractName = "TestImpl2";
	uint public rate = 2000; 
}