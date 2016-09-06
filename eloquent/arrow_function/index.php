<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sintaxe Arrow function javascript</title>
</head>
<body>

	<script type="text/javascript" charset="utf-8">
		/*
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
			https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
		*/
		var af 	= ( () => 'test');
		var af2 = ( () => {
			return arguments;
		});
		var anounymous = ( () =>
          	(function() {
          		console.log(this);
          	}).call()
      	);

      	var anounStrictMode = ( () =>
          	(function() {
          		'use strict';
          		console.log(this);
          	})()
      	);


		/*
			Arrow function faz bind da clausura return
		*/
		var val_this = ( () => {'use strict';  this});

      	var max = ( (a, b) => a > b ? a : b);
      	var abs = ( (a) => a >= 0 ? a : -a);

      	var apply_af = ( (a) => {
      		return abs.apply(undefined, [a])
      	});

      	var call_af = ( (a) => {
			return abs.call(undefined, a)
      	});

	</script>

	<script src="arrow-func.js" type="text/javascript" charset="utf-8" async defer></script>

</body>
</html>