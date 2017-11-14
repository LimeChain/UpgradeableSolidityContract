pragma solidity ^0.4.15;

import "./Upgradeability/UpgradeableProxy.sol";

contract TestProxy is UpgradeableProxy {
	function TestProxy(address initialImplementation) UpgradeableProxy(initialImplementation) {}
}