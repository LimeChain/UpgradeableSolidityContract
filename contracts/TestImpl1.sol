pragma solidity ^0.4.15;

import "./Upgradeability/UpgradeableImplementation.sol";
import "./ITestImpl.sol";

contract TestImpl1 is ITestImpl, UpgradeableImplementation {

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