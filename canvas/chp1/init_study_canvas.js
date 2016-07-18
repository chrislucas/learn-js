'use strict';
// canvas
var frame;

var writeInCanvas = function(ctx) {
	ctx.font 		= '138px Arial';
	ctx.fillStyle 	= 'cornflowerblue';
	ctx.strokeStyle = 'blue';
	console.dir(frame);
	if(frame != null) {
		var msg = 'Jello Canvas';
		ctx.fillText(msg, frame.width * 0.3 - 50, frame.height * 0.7);
		ctx.strokeText(msg, frame.width * 0.3 - 50, frame.height * 0.7);
	}

};
/**
* Usar css para definir a dimensao do Canvas
* e diferente de usar os atributos 'width' e 'height'
* do elemento canvas.
* A diferenca eh que o elemento Canvas possui 2 valores para Tamanho
* 1) O tamanho do proprio canvas
* 2) O valor do cabvas drawing surface
* Quando definimos a dimensao do canvas dando valores para os atributos
* width e height, definimos a dimensao do canvas e do que eh desenhado nele
* Quando definimos via CSS, somente o valor da dimensao do Canvas eh definido
*/

var setDimensionFrame = function(width, height) {
	frame.width 	=  width
	frame.height 	= height;
};

/**
* Quando o tamanho de um do canvas nao corresponde ao
* tamanho dos elementos desenhados em sua superficie
* o browser ajusta a escala da superficie de desenho para
* ajustar o elemento desenhado
*/
var drawingTriangle = function() {

};

var init = function() {
	frame = document.getElementById('area');
	var context = area.getContext('2d');
	setDimensionFrame(screen.width * 0.8, 300);
	//writeInCanvas(context);
	_ToDataURL('image/jpeg', 0.9);
	_ToBlob();
};

var _ToDataURL = function(imageType, quality) {
	var data = frame.toDataURL(imageType, quality);
	console.log(data);
	console.log(area === frame);
};

var _ToBlob = function(callback, imageType, args) {

};



window.onload = init;