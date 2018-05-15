pragma solidity ^0.4.23;

import "./Upgradeability/OwnableUpgradeableImplementation/IOwnableUpgradeableImplementation.sol";


contract ITestOwnableImpl is IOwnableUpgradeableImplementation {

    function rate() public view returns (uint);

    function setRate(uint r) public;

    function getRate() public view returns (uint);
}