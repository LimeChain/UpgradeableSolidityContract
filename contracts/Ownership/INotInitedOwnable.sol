pragma solidity ^0.4.23;


contract INotInitedOwnable {

    function init() public;

    function transferOwnership(address newOwner) public;
}