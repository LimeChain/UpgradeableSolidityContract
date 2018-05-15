pragma solidity ^0.4.23;

import "./Upgradeability/OwnableUpgradeableImplementation/OwnableUpgradeableImplementation.sol";
import "./ITestOwnableImpl.sol";


contract TestOwnableImplementation2 is ITestOwnableImpl, OwnableUpgradeableImplementation {

    uint public rate;

    function rate() public view returns (uint) {
        return rate;
    }

    function setRate(uint r) public {
        rate = r;
    }

    function getRate() public view returns (uint) {
        return 2000;
    }
}