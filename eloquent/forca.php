<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Jogo de forca</title>
</head>
<body>


	<div id="gamebox">

	</div>

	<script type="text/javascript" charset="utf-8" async defer>

		/*
			https://jsperf.com/html-insertion-js-vs-jquery
			http://stackoverflow.com/questions/584751/inserting-html-into-a-div
			http://www.w3schools.com/jsref/prop_style_textalign.asp
			https://gist.github.com/pafnuty/558c9f0f50c66d05c13a
			https://gist.github.com/torfeld6/3225833
			Ler
			https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
			Ler tambem
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
		*/
		var words = ['javascript', 'php', 'java', 'pytho', 'cpp'];

		var randomIdx = function() {
			var max = words.length - 1;
			var min = 0;
			var idx = Math.floor(Math.random() * (max - min + 1)) + min;
			return idx;
		};

		var pickWord = function(idx) {
			console.log(idx);
			if(idx > words.length || idx < 0) {
				throw new Error('Fora dos limites do vetor words');
			}
			return words[idx];
		};

		var injectWordToHTML = function() {
			var word = pickWord(randomIdx());
			var gameBox = document.getElementById('gamebox');
			// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
			// this is equivalent:
			// var style = document.defaultView.getComputedStyle(elem1, null);
			//var cs = window.getComputedStyle(gameBox, null);
			//console.log(cs.getPropertyValue('height'));
			//console.log(word);


			var width  = document.body.clientWidth;

			if(gameBox && word) {
				var inputs = new Array(word.legth);
				//console.log(word, word.length, inputs);
				for(var i=0; i<word.length; i++) {
					var input = document.createElement('input');
					var style = document.getElementsByTagName("style");
					//console.log(style);
					style['width']  = width * .05+ 'px';
					style['height'] = width * .05+ 'px';
					style['padding'] = '20px';
					style['margin']  = '10px';
					/*
						font-style
						font-variant
						font-weight
						font-size
						line-height
						font-family
					*/
					style['font']    = 'italic bold 20px arial,serif';
					style['textAlign']    = 'center';

					insertStyle(input, style);
					toggleClass(input, 'text');

					input.addEventListener('keydown', function(evt) {
						var str = this.value;
						console.dir(str.length);
						// fazer uma funcao que impeça a digitação de mais de um caracter
						// usar a funcao substring

						if(str.length > 1) {
							this.value = str[0]; //str.substring(0, 1);
						}

					});

					appendElement(gameBox, input);
				}
			}
		};

		var hasClass = function(element, clazz) {
			var regex = '(\\s|^)' + clazz + '(\\s|$)';
			return element.className.match(new RegExp(regex));
		};

		// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
		var addClass = function(element, clazz) {
			console.log('classList.contains %s ',element.classList.contains(clazz))
			if( ! hasClass(element, clazz) ) {
				//element.className += '' + clazz;
				// da para adicionar multiplas classes
				element.classList.add(clazz);
			}
		};

		var removeClass = function(element, clazz) {
			console.log('classList.contains %s ',element.classList.contains(clazz))
			if( hasClass(element, clazz) ) {
				var regex = '(\\s|^)' + clazz + '(\\s|$)';
				//element.className = element.className.replace(regex, '');
				// da para remover multiplas classes
				element.classList.remove(clazz);
			}
		}

		var toggleClass = function(element, clazz) {
			if(hasClass(element, clazz)) {
				removeClass(element, clazz);
			} else {
				addClass(element, clazz);
			}
		};

		var insertStyle = function (element, style) {
			//console.log(style);
			for(var prop in style) {
				//console.log(prop, style[prop]);
				element.style[prop] = style[prop];
			}
		}

		var insertElement = function(parent, child) {
			parent.innerHTML += child;
		}

		var appendElement = function(parent, child) {
			parent.appendChild(child);
		};

		var removeElementChild = function (parent, child) {
			parent.removeChild(child)
		};

		window.onload = function() {
			injectWordToHTML();
		};

	</script>

</body>
</html>