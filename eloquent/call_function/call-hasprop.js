/*
	https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
	Um puta bom exemplo do uso da funcao call()
	eh a possibilidade de mudar o valor de 'this' dentro de uma funcao.
	vamos a um exemplo do uso dela junto com a funcao hasOwnProperty
*/

var obj = {
	/*
		Essa linguagem maravilhosa nao protege a palavra 'hasOwnProperty'
		assim podemos reescreve-la do jeito que quisermos
	*/
	hasOwnProperty: function() {
		return false;
	}
	,attr: 1
};


console.log(obj.hasOwnProperty('attr'));		// vai dizer que nao tem essa propriedade porque hasOwnProperty retorna false \o/

// solucao: usar 'hasOwnProperty' de outro objeto
// e com a funcao call(this, thirArs), mudar o valor de 'this' para 'var obj'
console.log({}.hasOwnProperty.call(obj, 'attr'));
// ou
console.log(Object.prototype.hasOwnProperty.call(obj, 'attr'));

console.log(Object.getOwnPropertyNames(obj), Object.getOwnPropertyNames);


