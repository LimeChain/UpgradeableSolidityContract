pragma solidity ^0.4.23;

import "../../Ownership/INotInitedOwnable.sol";


contract IOwnableUpgradeableImplementation is INotInitedOwnable {

    function transferOwnership(address newOwner) public;

    function getOwner() public view returns (address);

    function upgradeImplementation(address _newImpl) public;

    function getImplementation() public view returns (address);
}