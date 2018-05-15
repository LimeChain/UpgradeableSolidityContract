const TestProxy = artifacts.require("./TestProxy.sol");
const TestOwnableImplementation = artifacts.require("./TestOwnableImplementation.sol");
const TestOwnableImplementation2 = artifacts.require("./TestOwnableImplementation2.sol");
const ITestOwnableImpl = artifacts.require("./ITestOwnableImpl.sol");
const IOwnableUpgradeableImplementation = artifacts.require("./Upgradeability/OwnableUpgradeableImplementation/IOwnableUpgradeableImplementation.sol");
const util = require('./util');
const expectThrow = util.expectThrow;

contract('TestProxyOwnable', function (accounts) {

	let implementedContract;
	let proxy;
	let impl;
	let impl2;

	const _owner = accounts[0];
	const _notOwner = accounts[1];

	describe("creting proxy", () => {
		beforeEach(async function () {
			impl = await TestOwnableImplementation.new();
			proxy = await TestProxy.new(impl.address);
			implementedContract = await ITestOwnableImpl.at(proxy.address);
			await implementedContract.init();
		});

		it("should be able to call getter method of the first contract", async function () {
			const rate = await implementedContract.getRate();
			assert(rate.eq(1000), "The getRate did not return correctly");
		});

		it("should be able to call setter method of the first contract", async function () {
			await implementedContract.setRate(43);
			const rate = await implementedContract.rate();
			assert(rate.eq(43), "The rate did not return correctly");
		});

		it("should set the owner of the first contract", async function () {
			const owner = await implementedContract.getOwner.call();
			assert.strictEqual(owner, _owner, "The rate did not return correctly");
		});
	});

	describe("creting proxy", () => {
		beforeEach(async function () {
			impl = await TestOwnableImplementation.new();
			impl2 = await TestOwnableImplementation2.new();
			proxy = await TestProxy.new(impl.address);
			implementedContract = await ITestOwnableImpl.at(proxy.address);
			implementedContract.init();
		})

		it("should be able to upgrade contract", async function () {
			const rate1 = await implementedContract.getRate();
			const upgradeableContract = await IOwnableUpgradeableImplementation.at(proxy.address);
			await upgradeableContract.upgradeImplementation(impl2.address);
			const rate2 = await implementedContract.getRate();
			assert(rate1.eq(1000), "The rate1 did not return correctly");
			assert(rate2.eq(2000), "The rate2 did not return correctly");
		});

		it("should be able to read from the upgraded contract", async function () {
			await implementedContract.setRate(43);
			const rate = await implementedContract.rate();
			assert(rate.eq(43), "The first rate was not set correctly");
			const upgradeableContract = await IOwnableUpgradeableImplementation.at(proxy.address);
			await upgradeableContract.upgradeImplementation(impl2.address);
			const rate2 = await implementedContract.rate();
			assert(rate2.eq(43), "The second rate was not set correctly");
		});

		it("should throw on upgrade contract from not owner", async function () {
			const upgradeableContract = await IOwnableUpgradeableImplementation.at(proxy.address);
			await expectThrow(upgradeableContract.upgradeImplementation(impl2.address, {
				from: _notOwner
			}));
		});

	});

});