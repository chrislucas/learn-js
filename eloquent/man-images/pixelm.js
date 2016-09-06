
var Canvas = function(id) {
	'use strict';
	var ref = this;
	ref.id 	= id;
	ref.getCanvas = function(id) {
		if(id === undefined) {
			return document.getElementById(ref.id);
		}
		else {
			return document.getElementById(id);
		}
	};
	ref.getHTMLElement = ref.getCanvas;

	ref.getContext2D = function() {
		var canvas = ref.getCanvas(ref.id);
		if(canvas) {
			return canvas.getContext('2d');
		}
	}

	ref.getPixel = function(x, y, dx, dy) {
		var context = ref.getContext2D();
		if(context) {
			var pixel = context.getImageData(x, y, dx, dy);
			return pixel;
		}

		return undefined;
	}

	ref.setWidth = function(width) {
		var canvas = ref.getCanvas(ref.id);
		if(canvas)
			canvas.width = width;
	}

	ref.setHeight = function(height) {
		var canvas = ref.getCanvas(ref.id);
		if(canvas)
			canvas.height = height;
	}

	ref.addEvent = function(event, callback) {
		if(callback instanceof Function) {
			ref.getCanvas().addEventListener(event, callback);
		}
	}
	return ref;
	/*
	return  {
		 id: id
		,getHTMLElement: getCanvas(id)
	}
	*/
};

var CanvasE = function(id) {
	this.id = id;
};

CanvasE.prototype.getHTMLElement = (new Canvas()).getHTMLElement;

class CanvasHTML {
	constructor(id) {
		this.id = id;
	}

	getElement() {
		return document.getElementById(this.id);
	}
}



var init = function() {

	var canvas = new Canvas('canvas');
	if(canvas !== undefined) {
		//var element = canvas.getHTMLElement();
		//console.log(canvas, element);
		var context = canvas.getContext2D();
		console.log(context, pick instanceof Function, typeof pick);
		var image = new Image();
		//image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg' + '?' + (new Date()).getTime();
		image.src = '22540_miscellaneous_empty_road_w_fog.jpg';
		image.style.width = '500px';
		image.style.height = 'auto';

		console.log(image.width, image.height);
	 	//image.style.display = 'none';
		//image.crossOrigin = "Anonymous";
		//image.setAttribute('crossOrigin', '');
		canvas.setWidth(image.width * 0.5);
		canvas.setHeight(image.height * 0.5);

		console.log(canvas);

		console.dir(image);
		image.onload = function(evt) {
			//console.log(evt);
			context.drawImage(image, 0, 0/*, canvas.width, canvas.height*/);
		}

		canvas.addEvent('mousemove', function(evt){
			var x = evt.layerX;
			var y = evt.layerY;
			//console.log("%d %d\n", x, y);
			var pixel =  canvas.getPixel(x, y, 1, 1);
			var data = pixel.data;
			var block = document.querySelector('.rgba');
			console.log(rgba);
			var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';
			block.style.background = rgba;
			block.textContent = rgba;
		});
	}
}

var pick = function(evt, ref) {

};


window.onload = init();