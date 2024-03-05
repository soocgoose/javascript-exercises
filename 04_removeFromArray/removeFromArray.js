const removeFromArray = function(array, ...elements) {
	for (const e of elements) {
		let i = -1;
		while ((i = array.indexOf(e)) > -1) {
			array.splice(i, 1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
