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
*/

var chars = [' '];

var initChars = function() {
	for(var i=97; i<123; i++) {
		chars.push(String.fromCharCode(i));
	}
};

var randomChar = function() {
	var sz = chars.length;
	min = 0;
	max = sz;
	var idx = Math.floor(Math.random() * (max - min + 1)) + min;
	return chars[idx];
};

var simulateKeyBoardEvent = function(event, k, c) {
	var keyboardEvent = document.createEvent('KeyboardEvent');

	var codeUpperCase = k.toUpperCase(k).charCodeAt(0);
	console.log(codeUpperCase, String.fromCharCode(codeUpperCase));

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

    //console.dir(document.defaultView === window);
    //console.log(keyboardEvent['initKeyboardEvent'].arguments);

    if(keyboardEvent['initKeyboardEvent'])  {
    	keyboardEvent['initKeyboardEvent'](
           event
           ,false
           ,false
           ,document.defaultView
           /*
           ,false
           ,false
           ,false
           ,false
           */
           ,k
           ,c
           , true // [test]in boolean ctrlKeyArg | webkit event.shiftKey | old webkit event.ctrlKey | IE9 event.modifiersList
           , false // [test]shift | alt
           , true // [test]shift | alt
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


    if(keyboardEvent.keyCodeVal !== c) {
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
	//console.log(element.dispatchEvent);
	//console.dir(event);
};

window.onload = function() {
	initChars();
	console.log(chars);
	var text = document.getElementById('textarea');
	if(text !== undefined) {
		var typeEvt = 'keydown';
		text.addEventListener(typeEvt, function(evt){
			console.log(evt);
		});
		fire(text, typeEvt);
		//setInterval(fire, 3000, text, typeEvt);
	}
};