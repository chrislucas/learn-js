'use strict';


var canvas;
var ctxCanvas2D;
var ctxCanvas3D;

var setContextCanvas = function(id) {
	canvas = document.getElementById(id);
	ctxCanvas2D = canvas.getContext('2d');
	ctxCanvas3D = canvas.getContext('3d');
};



var init = function() {
	setContextCanvas('area');
	setDimensionFrame(screen.width * 0.8, 300);
	console.log(ctxCanvas2D);
}

var setDimensionFrame = function(width, height) {
	canvas.width 	=  width
	canvas.height 	= height;
};

var drawingTriangle = function() {
	// entendendo o conceito de salvar e restaurar o contexto
	// existe uma pilha de contexto (estrutura de dados)
	// quando chamamos o metodo save(), p contexto e armazenado no topo da pilha
	ctxCanvas2D.save();

	// quando chamamos o metodo restore(), eh removido do topo da pilha
	// o ultimo estado armazenado. O estado removido da pilha torna-se
	// o estado atual, assim o browser define o estado do canvas como
	// o ultimo estado removido da pilha
	ctxCanvas2D.restore();
};

window.onload = init;