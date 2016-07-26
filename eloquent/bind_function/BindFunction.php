<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Bind Function</title>
</head>
<body>
	<!--
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Method_binding
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	 -->
	 <script type="text/javascript" charset="utf-8" async defer>
	 		// criando funcoes usando bind
	 		'use strict';

	 		var List = function() {
	 			return Array.prototype.slice.apply(arguments);
	 		};

	 		var run = function() {
		 		var list = List(1,2,3);
	 			console.log(list);
	 			default_list = List.bind(undefined, [1000, 100, 10]);
	 			console.log(default_list(1,2,3));
	 		};

			function Clazz() {}

	 		var run2 = function() {

	 			Clazz.prototype.timer = function(argument) {
	 				console.log(this);
	 				var f1 = this.methodA.bind(this);
	 				var f2 = this.methodA;

	 				 //window.setTimeout(f2.apply(this), 3000);
	 				 window.setTimeout(f1, 3000);
	 				 window.setTimeout(f2, 3000);
	 			};

	 			Clazz.prototype.methodA = function() {
	 				console.log(this, 'methodA');
	 			}

	 			Clazz.prototype.methodB = function(){
	 				 console.log(this, 'methodB');
	 			};


	 			var clazz = new Clazz();
	 			clazz.timer();
	 		};

	 		//run();
	 		run2();
	 		//window.onload = run;


	 </script>
</body>
</html>