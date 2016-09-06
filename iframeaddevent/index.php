<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Teste inserir evento em elemento dentro do iframe que foi inserido dinamicamente</title>
</head>
<body>

	<!--
	X-Frame-Options
		https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
		http://pt.stackoverflow.com/questions/80969/refused-to-display-in-a-frame-because-it-set-x-frame-options-to-sameorigin
		https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	-->
	<!--
	<iframe id="meuiframe" src="http://www.w3schools.com/html/html_iframe.asp" width="600px" height="400px" frameborder="0"></iframe>
	-->
	<button class="addButtons">Adicionar botoes</button>

	<iframe id="meuiframe2" src="quadro.php" width="600px" height="400px" frameborder="0"></iframe>

	<script src="../libs/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" charset="utf-8" async defer>
		$(document).ready(function($) {
/*
			var iframe = document.getElementById('meuiframe2');
			// https://github.com/jquery/jquery/blob/master/src/event.js
			// console.log($(iframe).on);
			// http://stackoverflow.com/questions/24603580/how-can-i-access-the-dom-elements-within-an-iframe

			if(iframe != undefined) {
				var contentWindow = iframe.contentWindow;

				iframe.addEventListener('load', function() {
					var doc = this.contentDocument || this.contentWindow.document;
					console.log(doc);
				});
			}

*/
			var div;

			$('.addButtons').click(function() {
				var button = document.createElement('button');
				console.dir(button);

				if(div !== undefined) {
					console.log(div);
					console.log(button);
					//$(div).append(button);
				}
			});

			$('.buttonInjected').on('click', function() {
				console.log(arguments);
			});

			$('#meuiframe2').load(function() {
				//var doc = this.contentDocument || this.contentWindow.document;
				//console.log(doc);
				div = $(this).contents().find('.test');

			});
		});
	</script>


</body>
</html>