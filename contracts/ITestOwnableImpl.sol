pragma solidity ^0.4.15;

import "./Upgradeability/OwnableUpgradeableImplementation/IOwnableUpgradeableImplementation.sol";

contract ITestOwnableImpl is IOwnableUpgradeableImplementation {

	function rate() public constant returns(uint);

	function setRate(uint r) public;

	function getRate() public constant returns(uint);
}