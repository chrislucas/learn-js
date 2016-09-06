/*
KeyboardEvent
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#initKeyboardEvent%28%29
*/
/*
	http://hackertyper.net/

	https://developer.mozilla.org/pt-BR/docs/Web/API/Element/getElementsByClassName
	http://stackoverflow.com/questions/6762557/how-to-add-event-listener-for-html-class

	search
	queryselectorall vs getelementsbyclassname

	http://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid

	http://codepen.io/anon/pen/thnCd
	http://stackoverflow.com/questions/596481/simulate-javascript-key-events


	Tutorial
	http://stackoverflow.com/questions/10455626/keydown-simulation-in-chrome-fires-normally-but-not-the-correct-key/12522769#12522769
	https://gist.github.com/ejoubaud/7d7c57cda1c10a4fae8c

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

var simulateKeyBoardEvent = function(event, k, c) {
	var keyboardEvent = document.createEvent('KeyboardEvent');
	//console.log(keyboardEvent);

	var method = typeof keyboardEvent.initKeyBoardEvent !== undefined
		? "initKeyboardEvent" : "initKeyEvent";

	//console.log(method);
	//console.log(keyboardEvent.__proto__);
	//console.log(keyboardEvent[method], keyboardEvent['initKeyEvent']);
	//console.dir(keyboardEvent[method].arguments);
	/*
	keyboardEvent[method](
		 event
		,true 			// bubbles
        ,false 			// cancelable
        ,document.defaultView//window // viewArg: should be window
        ,false 			// ctrlKeyArg
        ,false 			// altKeyArg
        ,false 			// shiftKeyArg
        ,false 			// metaKeyArg
        ,keyCodeArg 	// keyCodeArg : unsigned long the virtual key code, else 0
        ,charCodeArgs 	// charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
    );
    */

    Object.defineProperty(keyboardEvent, 'keyCode', {
    	get: function() {
    		return this.keyCodeVal;
    	}
    });

    Object.defineProperty(keyboardEvent, 'which', {
    	get: function() {
    		return this.keyCodeVal;
    	}
    });


    if(keyboardEvent['initKeyboardEvent'])  {
    	keyboardEvent['initKeyboardEvent'](event, true, true, document.defaultView, false, false, false, false, k, c)
    }

    else {
    	keyboardEvent['initKeyEvent'](event, true, true, document.defaultView, false, false, false, false, k, 0)
    }

    keyboardEvent.keyCodeVal = k;
    if(keyboardEvent.keyCodeVal !== k) {
    	console.log(keyboardEvent.keyCode, keyboardEvent.which);
    }

    return keyboardEvent;
};


var fire = function(element) {
	var char 		= randomChar();
	var code 		= char.charCodeAt(0);
	var event 		= simulateKeyBoardEvent('keydown', code, 13);

	console.log(char, code, event);
	element.dispatchEvent(event);
};

window.onload = function() {
	var text = document.getElementById('textarea');
	if(text !== undefined) {
		fire(text);
	}
};