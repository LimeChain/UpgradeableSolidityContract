var TestOwnableImplementation = artifacts.require("./TestOwnableImplementation.sol");
var TestOwnableImplementation2 = artifacts.require("./TestOwnableImplementation2.sol");
var TestProxy = artifacts.require("./TestProxy.sol");

module.exports = async function (deployer) {

	await deployer.deploy(TestOwnableImplementation);
	await deployer.deploy(TestOwnableImplementation2);
	await deployer.deploy(TestProxy, TestOwnableImplementation.address);
};