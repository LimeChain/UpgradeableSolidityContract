pragma solidity ^0.4.15;

contract ITestImpl {

	function rate() public constant returns(uint);

	function setRate(uint r) public;

	function getRate() public constant returns(uint);
}