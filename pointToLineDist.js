var pointToLineDist = function(L0, L1, P0) { // input point signals
	var v = L1.sub(L0);
	return P0.distance(L0.add(v.mul(P0.sub(L0).dot(v).div(v.dot(v))))); // returns scalar signal
};

// adapted from http://geomalgorithms.com/a02-_lines.html
