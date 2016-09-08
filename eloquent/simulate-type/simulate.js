/*
http://j-ulrich.github.io/jquery-simulate-ext/
http://stackoverflow.com/questions/6124692/jquery-simulating-keypress-event-on-an-input-field
http://jsfiddle.net/DxER9/

http://www.howtocreate.co.uk/tutorials/javascript/domevents#domevld1

plugin
http://bililite.com/blog/2011/01/23/improved-sendkeys/

simulando digitação
http://maythesource.com/2012/06/26/simulating-keypresses-keystrokes-with-javascript-for-use-with-greesemonkey-etc/

Veja se da para tirar algo
http://jsfiddle.net/termi/yjc5F/
http://stackoverflow.com/questions/961532/firing-a-keyboard-event-in-javascript

*/
jQuery(document).ready(function($) {
	(function() {
		var e = $.Event('keypress');
		e.which = 65;
		console.log(e);
		$('#text').trigger(e);
	}());
});