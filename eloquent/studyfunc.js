// Function expressions vs. Function declarations
// http://jstherightway.org/pt-br/

/*
Function expressions vs. Function declarations
http://kangax.github.io/nfe/
http://www.permadi.com/tutorial/jsFunc/index.html
http://stackoverflow.com/questions/11146814/difference-between-assigning-function-to-variable-or-not
http://stackoverflow.com/questions/336859/javascript-function-declaration-syntax-var-fn-function-vs-function-fn
*/

// hoisting
/*
http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
http://adripofjavascript.com/blog/drips/variable-and-function-hoisting
https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
http://www.w3schools.com/js/js_hoisting.asp
http://loopinfinito.com.br/2014/10/29/hoisting-e-escopo-em-javascript/
*/


// tutorial js tableless
// https://medium.com/tableless/o-que-todo-desenvolvedor-javascript-precisa-saber-2cc33daedb86#.4m6cl2uoa
// funcao sem contexto

//'use strict';
// tirando o modo strict para testar o exemplo abaixo
var ctx = 'valor qualquer';
var funcaosemcontexto =  {
	 ctx: 'outro valor qualquer'
	,method: function() {
		function foo() {
			'use strict';
			var ctx = 'terceiro valor qualquer';
			// com o modo strict this nao esta definido nesse escopo
			// sem ele this == window
			console.log(this);
			//return this.ctx;
		}
		console.dir(this);		// this aqui esta no contexto do objeto
		console.dir(this.foo);
		console.dir(foo);
		return foo();		// invocando sem contexto
	}
};
console.log(funcaosemcontexto.method());
console.log(funcaosemcontexto.method.call(window));
//console.log(funcaosemcontexto.method.foo.call(window));


