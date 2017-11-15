pragma solidity ^0.4.15;

import "./Upgradeability/OwnableUpgradeableImplementation/OwnableUpgradeableImplementation.sol";
import "./Upgradeability/OwnableUpgradeableImplementation/IOwnableUpgradeableImplementation.sol";
import "./ITestImpl.sol";

contract TestOwnableImplementation2 is ITestImpl, OwnableUpgradeableImplementation {

	uint public rate;

	function rate() public constant returns(uint) {
		return rate;
	}

	function setRate(uint r) public {
		rate = r;
	}

	function getRate() public constant returns(uint) {
		return 2000;
	}
}