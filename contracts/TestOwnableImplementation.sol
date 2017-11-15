pragma solidity ^0.4.15;

import "./Upgradeability/OwnableUpgradeableImplementation/OwnableUpgradeableImplementation.sol";
import "./ITestImpl.sol";

contract TestOwnableImplementation is ITestImpl, OwnableUpgradeableImplementation {

	uint public rate;

	function rate() public constant returns(uint) {
		return rate;
	}

	function setRate(uint r) public {
		rate = r;
	}

	function getRate() public constant returns(uint) {
		return 1000;
	}
}