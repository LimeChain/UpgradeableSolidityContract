const UpgradeableProxy = artifacts.require("./UpgradeableProxy.sol");
const TestImpl1 = artifacts.require("./TestImpl1.sol");
const TestImpl2 = artifacts.require("./TestImpl2.sol");
const util = require('./util');
const expectThrow = util.expectThrow;

contract('UpgradeableProxy', function (accounts) {

	let implementedContract;
	let proxy;
	let impl;

	const _owner = accounts[0];
	const _notOwner = accounts[1];

	describe("creting proxy", () => {
		beforeEach(async function () {
			impl = await TestImpl1.new();
			proxy = await UpgradeableProxy.new(impl.address);
			implementedContract = await TestImpl1.at(proxy.address);
			console.log(implementedContract);
		})

		it("should have set the oracle of the contract", async function () {
			const rate = await impl.rate.call();
			const rate2 = await implementedContract.rate.call();
			console.log(rate);
			console.log(rate2);
			assert(rate2.eq(1000), "The rate was not set correctly");
		});

	});

});