'use strict';
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
	http://stackoverflow.com/questions/1897333/firing-a-keyboard-event-on-chrome
	https://gist.github.com/callmephilip/3519403

	http://teletype.rocks/

	Interessate post
	http://stackoverflow.com/questions/13987380/how-to-to-initialize-keyboard-event-with-given-char-keycode-in-a-chrome-extensio
	http://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script/9517879#9517879
*/

var chars = [' '];

var initChars = function() {
	for(var i=97; i<123; i++) {
		chars.push(String.fromCharCode(i));
	}
};

var randomChar = function() {
	var sz = chars.length;
	var min = 0;
	var max = sz;
	var idx = Math.floor(Math.random() * (max - min + 1)) + min;
	return chars[idx];
};

var simulateKeyBoardEvent = function(event, k, c) {
	var keyboardEvent = document.createEvent('KeyboardEvent');

	var codeUpperCase = k.toUpperCase(k).charCodeAt(0);
	//console.log(codeUpperCase, String.fromCharCode(codeUpperCase));

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

    Object.defineProperty(keyboardEvent, 'key', {
    	get: function() {
    		return k;
    	}
    });
/*
    Object.defineProperty(keyboardEvent, 'isTrusted', {
    	get: function() {
    		return true;
    	}
    });
*/
    // como estou tentado simular somente letras
    /*
    Object.defineProperty(keyboardEvent, 'code', {
    	get: function() {
    		return 'Key' + k.toUpperCase(k);
    	}
    });
    */

    //console.dir(document.defaultView === window);
    //console.log(keyboardEvent['initKeyboardEvent'].arguments);

    /*
            // type          'keypress',
            // bubbles       true,
            // cancelable    false,
            // view          window,
            // keyIdentifier '',
            // keyLocation   0,
            // ctrlKey       false,
            // altKey        false,
            // shiftKey      false,
            // metaKey       false,
            // altGraphKey   false
    */

    if(keyboardEvent['initKeyboardEvent'])  {
    	keyboardEvent['initKeyboardEvent'](
           event
           ,true
           ,false
           ,document.defaultView
           ,k
           ,c
           , false // [test]in boolean ctrlKeyArg | webkit event.shiftKey | old webkit event.ctrlKey | IE9 event.modifiersList
           , false // [test]shift | alt
           , false // [test]shift | alt
           , false // meta
           , false // altGraphKey
        );
    }

    else {
    	keyboardEvent['initKeyEvent'](
	       event
	      ,true
	      ,true
	      ,document.defaultView
	      ,false
	      ,false
	      ,false
	      ,false
	      ,k
	      ,0
      	);
    }

    keyboardEvent.keyCodeVal = codeUpperCase;
    //keyboardEvent.key = k;


    if(keyboardEvent.keyCodeVal !== codeUpperCase) {
    	console.log('error %s %s', keyboardEvent.keyCode, keyboardEvent.which);
    }

    return keyboardEvent;
};


var kEvent = function(typeEvent, char, code) {
	var event = new KeyboardEvent(typeEvent,
		{
			 bubbles : true
			,cancelable : true
			,key : code
			,char : char
			,shiftKey : true
		}
	);
	console.log(event);
}

var fire = function(element, typeEvent) {
	var char 	= randomChar();
	var code 	= char.charCodeAt(0);
	//console.log(char, code);
	//kEvent();
	/*
		https://developer.mozilla.org/pt-BR/docs/Web/API/KeyboardEvent/charCode
		'
			charCode is never set in the keydown and keyup events.
			In these cases, keyCode is set instead.
			MDN Mozilla
		'
	*/
	// [keypress, keydown]
	var event 	= simulateKeyBoardEvent(typeEvent, char, code);
	var c = element.dispatchEvent(event);
	element.value = char;
	//console.dir(event);
};

var addEvent = function(element, typeEvent) {
	if(element !== undefined) {
		element.addEventListener(typeEvent, function(evt){
			console.log(evt);
		});
		fire(element, typeEvent);
		//setInterval(fire, 3000, text, typeEvt);
	}
};

window.onload = function() {
	initChars();
	console.log(chars);
	var text 	  = document.getElementById('text');
	var textarea  = document.getElementById('textarea');
	var typeEvent = 'keydown';
	addEvent(text, typeEvent);
	addEvent(textarea, typeEvent);
};