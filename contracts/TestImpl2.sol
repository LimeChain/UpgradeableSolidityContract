pragma solidity ^0.4.23;

import "./Upgradeability/UpgradeableImplementation.sol";
import "./ITestImpl.sol";


contract TestImpl2 is ITestImpl, UpgradeableImplementation {
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