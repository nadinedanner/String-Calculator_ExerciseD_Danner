function StringCalculator() {}

StringCalculator.prototype.add = function(string_numbers) {
	if (string_numbers === '') {
		return 0;
	}

	if (string_numbers.includes(',')) {
		const parts = string_numbers.split(',');
		return parseInt(parts[0]) + parseInt(parts[1]);
	}

	return parseInt(string_numbers);
};