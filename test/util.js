const util = {
	expectThrow: async promise => {
		try {
			let result = await promise;
			console.log(result);
		} catch (error) {
			const invalidJump = error.message.search('invalid JUMP') >= 0
			const invalidOpcode = error.message.search('invalid opcode') >= 0
			const outOfGas = error.message.search('out of gas') >= 0
			const revert = error.message.search('revert') >= 0
			assert(invalidJump || invalidOpcode || outOfGas || revert, "Expected throw, got '" + error + "' instead")
			return
		}
		assert.fail('Expected throw not received')
	},

	getTimestampPlusSeconds: (seconds) => {
		let date = new Date();
		date.setSeconds(date.getSeconds() + seconds)
		let timestamp = +date;
		timestamp = Math.ceil(timestamp / 1000);
		return timestamp;
	},

	toBytes32: (i) => {
		const stringed = "0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16);
		return "0x" + stringed.substring(stringed.length - 64, stringed.length);
	},

	getTimeoutPromise: (secondsTimeout) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			}, (secondsTimeout + 1) * 1000)
		})
	}
}


module.exports = util;