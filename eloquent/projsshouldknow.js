/*
https://medium.com/tableless/o-que-todo-desenvolvedor-javascript-precisa-saber-2cc33daedb86#.4m6cl2uoa
*/

var clazz = {
	method: function() {
		'use strict';
		return this.name;
	}
	/*
		arrow function : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Lexical_this
		Arrow function nao definem seu proprio valor para 'this'
	*/
	,method2: () => {
		'use strict';
		return this;
	}
};

var ob = Object.create(clazz);
//console.log(ob);
ob.name = 'CL';
//console.log(ob.method());
//console.log(ob.method2.call());

/*
	Mudando o contexto de uma funcao atraves do metodo bind
	Assim como funciona apply e call, bind permite alterar
	o valor de 'this' de uma funcao, mas nao executa a funcao
	imediatamente. Bind retorna uma nova funcao com o contexto alterado
*/

var outroOb = Object.create(clazz);
outroOb.name = 'LCFS';
var methodBinded = ob.method.bind(outroOb);
/*
Desconmentar para estudo
console.log(
     methodBinded instanceof Function
    ,methodBinded instanceof Object
    ,'tt' instanceof String
    // http://stackoverflow.com/questions/23622695/why-in-javascript-both-object-instanceof-function-and-function-instanceof-obj
    ,Object instanceof Function
    ,Function instanceof Object
    ,methodBinded()
);
*/

var bindWithReactJS = function() {
	(function(){
		// https://facebook.github.io/react/downloads.html
		var tag = document.createElement('script');
		tag.setAttribute('src', 'https://unpkg.com/react@15.3.2/dist/react.js');
		var tag2 = document.createElement('script');
		tag2.setAttribute('src', 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.js');
		console.log(tag, tag2);
		document.head.appendChild(tag);
		document.head.appendChild(tag2);
	}());
	return {
		// depois eu vejo
	}
};

// bindWithReactJS();

/*
	Hoisting: suspender, levantar
*/

var f = 1;
/*
(() => {
	console.log(f);
	var f = 2;
})();
*/
var Fa = function() {
	//var f = 30;
	/*
		Variaveis declaradas em js sao 'elevadas' mas a sua inicializacao
		nao. No exemplo em questao a variavel 'f' foi definida fora do escopo
		da funcao 'Fa', se tentar utiliza a variavel o valor de 'f' sera o ja definido
		f = 1, caso crie uma nova variavel com o mesmo nome (como esta no codigo abaixo)
		'f' sera elevado e como 'f' eh definida depois da execucao do console.log
		o valor undefined e mostrado.
		Comportamento maluco Maluco nao ? Eh como se dentro do escopo da funcao
		'f' comecasse a existir so a partir da sua declaracao, e seu valor global
		desaparecesse
		Solucao: defina suas variavels sempre no topo do escopo da funcao
	*/
	console.log(f);
	var f = 2;
	console.log(f);
};
Fa();
/*
var Fb = function() {
	var f;
	console.log(f);
	var f = 2;
};
f = 3;
Fb();
*/
var Fc = function() {
	/*
		Nesse caso eh como se 'f' fosse sobreescrito
		o condicional if nao cria outro escopo
	*/
	var f = 1;
	if(true) {
		var f = 2;
		console.log(f);
	}
	console.log(f);
};
Fc();

var Fd = function() {
	let f = 1;
	if(true) {
		let f = 2;
		console.log(f);
	}
	console.log(f);
};
Fd();
