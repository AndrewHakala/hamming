var compute;
//compute the hamming distance between 2 DNA strands 
compute = function(s1, s2) {
	// this represents hamming distance
	if (s1.length !== s2.length) {
		// then show an error
		throw new Error('DNA strands must be of equal length.');
	}

	var distance = 0;

	// compute the Hamming distance
	
	for (var i = 0; i < s1.length; i += 1) {
		

		if (s1.charAt(i) !== s2.charAt(i)) {
			// add 1 to the distance
			distance += 1;
		}
	}

	// return the Hamming distance
	return distance;
};

module.exports = {
	compute: compute
};