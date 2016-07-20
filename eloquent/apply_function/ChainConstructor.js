'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

class Polygon {
	constructor(sides) {
		this.sides = sides;
	}

	print() {
		console.log('Polygon');
	}
}


class Triangle extends Polygon {
	constructor() {
		super(3);
	}

	print() {
		console.log('Triangle');
	}
}


class Square extends Polygon {
	constructor() {
		super(4);
	}

	print() {
		console.log('Square');
	}
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

var polygons = [new Triangle(), new Square(), new Polygon(50)];

//console.log(polygons);
/*
polygons.forEach(function(p) {
	(function(){
		this.print();
	}).apply(p)
});
*/
/*
	diferença entra apply e call
	http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
	apply(this, args[]), call(this, arg1, arg2, arg3)
*/

[10,20,30].forEach(function(x){
	(function () {
		/*
		 console.log(this);
		 arguments.forEach(function(el) {

		 });
		 */
	}).apply(x, [4,5,6]);
});

console.log(Math.min.apply(undefined, [4,-1,0]));


/*
	chain constructor
*/

Function.prototype.constructor = function(args) {
	var refconstructor = this;
	var newconstructor = function() {
		refconstructor.apply(this, args);
	}
	//newconstructor.prototype = refconstructor.prototype;
	return new newconstructor();
};

function EspConstructor() {
	// for(x in arguments) { console.log(arguments[x]);}
}

var espc = EspConstructor.constructor(new Triangle());
console.log(espc.constructor);
