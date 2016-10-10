// http://loopinfinito.com.br/2014/10/29/hoisting-e-escopo-em-javascript/

( () =>  {
	// definimos a variavel aqui
	var i = 2;
	if(true) {
		// achamos que aqui estamos num escopo diferente
		// como em c, cpp ou java
		var i = 3;
		console.log(i);
	}
	// e descobrimos que NAO
	// console.log imprime o valor que foi definido dentro do condicional
	// porque eh assim que o hoisting funciona, eleva a variavel que foi criada por ultimo
	console.log(i);
})/*()*/;

// para criarmos um escopo dentro do IF
// temos que usar uma closure e IIFE

( () => {
	var i = 2;
	if(true) {
		(() => {
			var i = 3;
			console.log(i);
		})();
	}
	console.log(i);
})/*()*/;
/*
	Hoisting:
	Toda variavel criada e 'elevada' para o topo de seu escopo.
	Porem sua inicializacao nao eh elevada junto, logo esse efeito
	que parece sobreescrever a variavel quando criamos uma variavel
	com um nome ja existente, acontece.
*/
// exemplos
var Fa = function() {
	try {
		console.log(a)
	} catch(e) {
		console.log(e);
	}
};
//Fa();

var Fb = function() {
	try {
		console.log(a);
		// olha a variavel hoisted ai, A variavel foi elevada, mas sua inicializacao nao
		var a = 2;
	} catch(e) {
		console.log(e);
	}
};
//Fb();

var Fc = function() {
	try {
		// a mesma coisa ocorre, print undefined
		var a;
		console.log(a);
		a = 2;
	} catch(e) {
		console.log(e);
	}
};
//Fc();

