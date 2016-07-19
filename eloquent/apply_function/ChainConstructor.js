'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

class Polygon {
	constructor(args) {}
}

//var pol = new Polygon(1,2,3);
//console.log(pol);


/*
	base de estudo. Construtor em js
*/
var P = (function() {
	'use strict';

	function P(args) {
		// enforces new
		if (!(this instanceof P)) {
			return new P(args);
		}
		// constructor body
	}

	P.prototype.methodName = function(args) {
		// method body
	};

	return P;
}());

//console.log(new P());