/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

if( ! Array.prototype.each ) {
	console.log('Array nao tem o metodo each !!!');

	Array.prototype.each = function(callback, thisArgs) {
		var T, k = 0;
		// console.log(null == undefined, null !== undefined); [true, true]

		if(this == null || this === undefined) {
			throw new TypeError('This is not defined');
		}
		var copy 	= Object(this);
		var len 	= copy.length >>> 0;
		console.log('Length array: %d', len);

		if(callback === undefined || {}.toString.call(callback) !== '[object Function]') {
			throw new TypeError(callback + 'is not a function');
		}

		if(thisArgs) {
			T = thisArgs;
		}

		while(k < len) {
			var value;
			/*
				https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
				http://stackoverflow.com/questions/16597170/check-if-an-object-has-a-user-defined-prototype
				verifica se o objeto em questao (no caso copy) possui a propriedade k
				Como as propriedades desse objecto sao valores de 0..N essa verificacao funcion
			*/
			//var prop = Object.prototype.hasOwnProperty.call(copy, k);
			var prop  = copy.hasOwnProperty(k);
			//console.log(T);
			if(prop) {
				value = copy[k];
				callback.call(T, value, k, copy);
			}
			k++;
		}
	};
}

[new User(1, 'Chris'), new User(2, 'Matherson')].each(function(ref, key, obj) {
	//console.log(this, typeof ref, key, typeof obj);
}, this);

