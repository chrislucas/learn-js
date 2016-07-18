'use strict';


if( ! /*Array.prototype.isArray*/ Array.isArray) {
	console.log('Array nao tem o metodo isArray');
	Array.prototype.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	}
}

if( ! Array.prototype.each2) {
	console.log('Array nao tem o metodo each2');
	Array.prototype.each2 = function(callback, thisArgs) {
		var T, k = 0;
		// console.log(null == undefined, null !== undefined); [true, true]

		if(this == null || this === undefined) {
			throw new TypeError('This is not defined');
		}
		var copy 	= Object(this);
		var len 	= copy.length >>> 0;

		if(callback === undefined || {}.toString.call(callback) !== '[object Function]') {
			throw new TypeError(callback + 'is not a function');
		}

		if(thisArgs) {
			T = thisArgs;
		}
		while(k < len) {
			var value;
			if(Object.prototype.hasOwnProperty.call(copy, k)) {
				value = copy[k];
				callback.call(T, value, k, copy);
			}
			k++;
		}
	};
}

Object.prototype.copyRef = function copyRef(original, properties) {
	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
	var object = Object.create(Object.getPrototypeOf(original));

	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
	if(properties !== undefined) {
		properties = Array.isArray(properties) ? properties : [properties];
		properties.forEach(function(name) {
			var desc = Object.getOwnPropertyDescriptor(original, name);
			Object.defineProperty(object, name, desc);
		});
	}

	return object;
};


function specifyingContextThis() {
	if(this !== undefined) {
		var properties 	= Object.getOwnPropertyNames(this);
		var copy 		= Object.copyRef(this, properties);
		//console.log(copy);
		var reply = [];
		for (var x in properties) {
			if(typeof properties[x] === "function")
				continue;
			//console.log(this, x, this[properties[x]]);
			reply.push(this[properties[x]]);
			//reply.push(copy[properties[x]]);
		}
		console.log(reply.join(' '));
	}
}



/*
console.log([{}.toString(),Function.toString(),{}.toString.call(specifyingContextThis),{}.toString.call(Function)]);
*/

/*
(function() {
	var users = [new User(1, 'Chris'), new User(2, 'Matherson')];
	users.forEach(function(element) {
		specifyingContextThis.call(element);
	});

})();
*/