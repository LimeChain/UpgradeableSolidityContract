const TestProxy = artifacts.require("./TestProxy.sol");
const TestImpl1 = artifacts.require("./TestImpl1.sol");
const TestImpl2 = artifacts.require("./TestImpl2.sol");
const ITestImpl = artifacts.require("./ITestImpl.sol");
const UpgradeableImplementation = artifacts.require("./UpgradeableImplementation.sol");
const util = require('./util');
const expectThrow = util.expectThrow;

contract('TestProxy', function (accounts) {

	let implementedContract;
	let proxy;
	let impl;
	let impl2;

	const _owner = accounts[0];
	const _notOwner = accounts[1];

	describe("creating proxy", () => {
		beforeEach(async function () {
			impl = await TestImpl1.new();
			proxy = await TestProxy.new(impl.address);
			implementedContract = await ITestImpl.at(proxy.address);
		})

		it("should be able to call getter method of the first contract", async function () {
			const rate = await implementedContract.getRate();
			assert(rate.eq(1000), "The getRate did not return correctly");
		});

		it("should be able to call setter method of the first contract", async function () {
			await implementedContract.setRate(43);
			const rate = await implementedContract.rate();
			assert(rate.eq(43), "The rate did not return correctly");
		});
	});

	describe("creating proxy", () => {
		beforeEach(async function () {
			impl = await TestImpl1.new();
			impl2 = await TestImpl2.new();
			proxy = await TestProxy.new(impl.address);
			implementedContract = await ITestImpl.at(proxy.address);
		})

		it("should be able to upgrade contract", async function () {
			const rate1 = await implementedContract.getRate();
			const upgradeableContract = await UpgradeableImplementation.at(proxy.address);
			await upgradeableContract.upgradeImplementation(impl2.address);
			const rate2 = await implementedContract.getRate();
			assert(rate1.eq(1000), "The rate1 did not return correctly");
			assert(rate2.eq(2000), "The rate2 did not return correctly");
		});

		it("should be able to read from the upgraded contract", async function () {
			await implementedContract.setRate(43);
			const rate = await implementedContract.rate();
			assert(rate.eq(43), "The first rate was not set correctly");
			const upgradeableContract = await UpgradeableImplementation.at(proxy.address);
			await upgradeableContract.upgradeImplementation(impl2.address);
			const rate2 = await implementedContract.rate();
			assert(rate2.eq(43), "The second rate was not set correctly");
		});

	});

});