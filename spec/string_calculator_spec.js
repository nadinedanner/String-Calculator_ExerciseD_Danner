describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	//testcase 1
	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	//testcase 2
	it('should return the number itself when a single number is passed', function() {
	expect(calculator.add('1')).toEqual(1);
});


});
