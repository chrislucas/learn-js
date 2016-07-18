'use strict';
/**
* Promise http://www.html5rocks.com/en/tutorials/es6/promises/#toc-async
*/
window.onload = function() {
	var logo = document.querySelector('.logo');
	//console.log(logo !== undefined);
	if(logo !== undefined) {
		logo.addEventListener('load', function() {
			console.log(this);
		});

		logo.addEventListener('mousemove', function(e) {
			var object = this;
			console.dir(object);
			object.style.position = 'absolute';
			object.style.left = e.pageX;
			object.style.top = e.pageY;
			//e.pageX, e.pageY
			//console.dir(e);
		});

		logo.addEventListener('error', function() {
			console.log(this);
		});
	}
};