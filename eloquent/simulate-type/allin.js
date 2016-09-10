'use strict';
/*
	simulou a digitacao nesse site
	http://hackertyper.net/
*/

var chars = [' '];
var initChars = function() {
		for(var i=97; i<123; i++) {
		chars.push(String.fromCharCode(i));
	}
}

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

var fire = function(element, typeEvent) {
	var char 	= randomChar();
	var code 	= char.charCodeAt(0);
	// [keypress, keydown]
	var event 	= simulateKeyBoardEvent(typeEvent, char, code);
	var c 		= element.dispatchEvent(event);
	//console.log('dispatchEvent %s', c);
};

var addEvent = function(element, typeEvent) {
	if(element !== undefined) {
		element.addEventListener(typeEvent, function(evt){
			//console.log(evt);
			console.log(evt.key);
		});
		//fire(element, typeEvent);
		//var clear = setInterval(fire, 1000, element, typeEvent);
		var clear = setTimeout(fire, 1000, element, typeEvent);
		console.log(clear);
		// clearInterval(clear)
	}
};

(function() {
	initChars();
	//console.log(chars);
	var typeEvent = 'keydown';
	addEvent(document.body, typeEvent);
	return 'IIFE';
}());