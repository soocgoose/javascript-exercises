const sumAll = function(lower, upper) {
	if (typeof lower != 'number' || typeof upper != 'number') {
		return 'ERROR';
	}

	if (lower < 0 || upper < 0) {
		return 'ERROR';
	}

	if (lower > upper) {
		const temp = upper;
		upper = lower;
		lower = temp;
	}

	let sum = 0;
	for (let i = lower; i <= upper; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
