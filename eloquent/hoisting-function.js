'use strict';
/*
	Funcoes sofrem hoisting tbm, de forma diferente das variaveis em JS.
	Nao so o nome da funcao eh 'elevado', o corpo da funcao tbm
*/

// quero testar o que ocorre com essas duas formas de se declarar funcoes

/* var fx;*/
console.log(fx, dx);
//fx();
// fx nao sera executada
// como fx foi definida dentro de uma variavel, ela segue a regra
// de hoisting de variavel, fx eh 'elevada', mas sua inicializacao nao
// function expression
var fx = function() {
	console.log('Hello World');
};
//console.log(fx);
//fx();

// a funcao dx sera executada
// o interessante disso eh que posso declarar as funcoes em qualquer
// ordem no doc js, se for dessa forma
dx();
// function declaration
function dx() {
	console.log('Outro hello world');
}

// Conclusao
// Ha diferenca entre function declaration and function expression
// O efeito hoisting ocorre de forma diferente nas duas formas

/*
Declaration vs Expression
https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
*/

// testando o hoisting com function declaration
function go() {
	function fx() {
		return ' \'fx\' definida no topo';
	}

	return fx();
	// hoisted. a funcao 'fx' eh elevada e sobreescreve a outra funcao 'fx' acima
	function fx() {
		return ' \'fx\' definida depois do retorno';
	}
}

console.log(go());

/*
	usando o operador 'let'
*/

( () => {
	// ReferenceError
	//console.log(x);
	// usando let nao ocorre hoisting
	let x = 2;
	(() => {
		// undefined
		console.log(x);
		// hoisting da variavel nao do valor
		var x = 2;
	})();
})/*()*/;

( () => {
	let x = 'valor num escopo';
	if(true) {
		// ReferenceError: x is not defined, com Let nao tem hoisting
		//console.log(x);
		let x = 'valor em outro escopo';
		console.log(x);
	}
	console.log(x);
})();

