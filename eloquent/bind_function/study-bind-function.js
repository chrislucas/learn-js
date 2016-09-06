/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Method_binding
*/

/*
	O metodo bind cria uma nova funcao a partir de uma existente
	e possibilita alterar o valor de 'this' dentro do contexto
	de execução dessa funcao
*/

/*
	// lembra a assinatura do metodo call
	bind(this, args ...)
*/

var fx = function() {
	'use strict';
	console.log('valor de this %o', this);
	return this;
};

var bind_fx = function() {
	var object = {
		fx: function(a) {
			//return ( (a) =>  a < 0 ? -a : a)
			( (a) => {
					(function(a) {
						return a < 0 ? -a : a;
					})()
				}
			);
		}
	};

	var new_fx = fx.bind(object);
	console.log(new_fx);
	//console.log(new_fx().fx()(-12));
	console.log(new_fx().fx(-12));

	return true;
};