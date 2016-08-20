<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Keyword 'this'</title>
</head>
<body>

	<script type="text/javascript" charset="utf-8" async defer>
		// TESTANDO VALORES DE THIS
		// STRICT MODE
		var globalref = this;
		var this_sm = function() {
			'use strict';
			// em strict mode 'this' tem o valor indefinido
			// e permanece assim a nao ser que alguma funcao
			// ou declaracao o mude
			return this;
		};

		var value_of_this = function() {
			'use strict';
			// fazendo um teste com o valor de this, chamando a funcao direto, e usando a variavel window
			console.log(this);
		}

		/*
			Arrow function faz bind da clausura return
		*/
		var val_this = ( () => {'use strict';  return this});

		var this_nsm = function() {
			// sem strict mode this === window
			return this;
		};


		var func_test_this = function() {
            /*
				Ainda tem mais essa;
				usando strict mode a variavel this, dentro do escopo
				de uma funcao tem como valor default undefined, e pode
				assumir qualquer valor que o programador quiser;
				Mas se chamarmos a funcao usando a variavel window, this tera o valor de window
            */
            value_of_this();

            window.value_of_this();

            //console.log(val_this());
/*
			console.log(
			    //this_sm()
	            //,this_nsm() === window
	            //,this_sm() === undefined
	            //,window.this_sm() === window
			);
*/
			return false;
		};

		// testando Arrow function
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Method_binding
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

		var func_test_arrow_function = function() {
			return f_arrow() == globalref;
		};

		var f_arrow 	= ( () => this);
		var f_arrow2 	= ( () => 2 * 2);
		var f_arrow3 	= ( () =>
            (function() {
				return 'function arrow is interesting';
			})()
		);

		//var f_arrow4 	= ( () => {return arguments});

	</script>
	<script src="study-this-kw.js" type="text/javascript" charset="utf-8" async defer></script>

</body>
</html>