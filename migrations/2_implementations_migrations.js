var TestImpl1 = artifacts.require("./TestImpl1.sol");
var TestImpl2 = artifacts.require("./TestImpl2.sol");
var TestProxy = artifacts.require("./TestProxy.sol");

module.exports = async function (deployer) {

	await deployer.deploy(TestImpl1);
	await deployer.deploy(TestImpl2);
	await deployer.deploy(TestProxy, TestImpl1.address);
};