<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Arguments Objects</title>
	<link rel="stylesheet" href="">
</head>
<body>


	<script type="text/javascript" charset="utf-8" async defer>
		'use strict';
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
		var f = function() {
			// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
			var arr = [];
			if(Array.prototype.hasOwnProperty('slice'))
				arr = Array.prototype.slice.call(arguments);
			/*
				Array.prototype.slice retorna um subconjunto aberto
				( [inicio, fim) onde o indce 'fim' nao eh contado)
				o indice pode ser negativo
			*/
			var arr2 = [0,1,2,3,4]
			console.log(arr
			            ,arr2.slice(0,2)
			            ,arr2.slice(-1)
			            ,arr2.slice(1,-1));
		};

		window.onload = f(0,1,2,3,4);


	</script>

</body>
</html>