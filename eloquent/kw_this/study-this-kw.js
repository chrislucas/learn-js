/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Method_binding
*/

/*
	In arrow function, This eh definido lexically (lexicamente sei la)
	o que quer dizer que, o valor de 'this' eh definido dentro do contexto
	onde esta sendo executado
*/

var globalObject = window;
var this_nsm_af = ( () => this );
var this_ysm_af = ( () => {
	'use strict';
	//globalObject = new Object();
	return this;
});
var object = {
	 this_ysm_af: this_ysm_af
	//,this_nsm_af: this_nsm_af
};

var test_value_this = function() {
	return this_nsm_af() === window;
};

var fa = function() {
	console.log(object.this_ysm_af());

	// {}.call(this, paramater ...)

	// podemos chamar a funcao atraves do metodo call
	// e tentar mudar o valor de this, que nao vai dar certo
	console.log(this_ysm_af.call(object));
	console.log(this_nsm_af.call(object));

	console.log(object.hasOwnProperty('this_ysm_af'));
	return {};
};