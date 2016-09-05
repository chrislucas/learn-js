<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Simulando digitacao</title>
</head>
<body>
	<textarea name="text" id="textarea"></textarea>
	<script type="text/javascript" charset="utf-8" async defer>
		/*
			http://hackertyper.net/

			https://developer.mozilla.org/pt-BR/docs/Web/API/Element/getElementsByClassName
			http://stackoverflow.com/questions/6762557/how-to-add-event-listener-for-html-class

			search
			queryselectorall vs getelementsbyclassname

			http://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid

			http://codepen.io/anon/pen/thnCd
			http://stackoverflow.com/questions/596481/simulate-javascript-key-events

			search
			simulate keypress javascript
			http://stackoverflow.com/questions/10455626/keydown-simulation-in-chrome-fires-normally-but-not-the-correct-key/12522769#12522769
		*/

		var chars = [];

		(function() {
			for(var i=97; i<123; i++) {
				chars.push(String.fromCharCode(i));
			}
		}());

		var randomChar = function() {
			var sz = chars.length;
			min = -1;
			max = sz;
			var idx = Math.floor(Math.random() * (max - min + 1)) + min;
			return chars[idx];
		};

		var simulateKeyBoardEvent = function(event, keyCodeArg) {
			var keyboardEvent = document.createEvent('KeyboardEvent');
			//console.log(keyboardEvent);
			var method = typeof keyboardEvent.initKeyBoardEvent !== undefined
				? "initKeyboardEvent" : "initKeyEvent";
			//console.log(method);
			//console.log(keyboardEvent.__proto__);
			keyboardEvent[method](
				 event
				,true 	// bubbles
                ,true 	// cancelable
                ,document.defaultView//window // viewArg: should be window
                ,false 	// ctrlKeyArg
                ,false 	// altKeyArg
                ,false 	// shiftKeyArg
                ,false 	// metaKeyArg
                ,keyCodeArg 	// keyCodeArg : unsigned long the virtual key code, else 0
                ,0 		// charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
            );

            return keyboardEvent;
		};


		window.onload = function() {
			var char 		= randomChar();
			var event 		= simulateKeyBoardEvent('keydown', char);
			var text 		= document.getElementById('textarea');
			console.log(char, text);
			text.dispatchEvent(event);
		};
	</script>
</body>
</html>
