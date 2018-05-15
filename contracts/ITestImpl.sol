pragma solidity ^0.4.23;


contract ITestImpl {

    function rate() public view returns (uint);

    function setRate(uint r) public;

    function getRate() public view returns (uint);
}