'use strict';

var canvas;
var ctxCanvas2D;
var ctxCanvas3D;

const FONT_HEIGHT 	= 15;
const MARGIN 		= 15;
const NUMERAL_SPACE = 20;

var hand_truncation;
var hour_hand_truncation;
var radius;
var hand_radius;

var setDimensionFrame = function(width, height) {
	canvas.width 	=  width
	canvas.height 	= height;
};

var setContextCanvas = function(id) {
	canvas = document.getElementById(id);
	ctxCanvas2D = canvas.getContext('2d');
	ctxCanvas3D = canvas.getContext('3d');

	hand_truncation 		= canvas.width * 0.25;
	hour_hand_truncation 	= canvas.width * 0.10;
	radius 				= canvas.width * 0.5 - MARGIN;
	hand_radius 		= radius + NUMERAL_SPACE;
};

var drawCircle = function() {
	ctxCanvas2D.beginPath();
	var cWidth  = canvas.width;
	var cHeight = canvas.height;
	ctxCanvas2D.arc(cWidth/2, cHeight/2, radius, 0, Math.PI * 2, true);
	ctxCanvas2D.stroke();
};


var loopClock;

var init = function() {
	setContextCanvas('area');
	setDimensionFrame(screen.width * 0.8, 500);
	//console.log(ctxCanvas2D);
	ctxCanvas2D.font = FONT_HEIGHT + 'px Arial';
	//console.log(Math.tan(45));
	//console.log(Math.cos(convertGradeToRadians(60)));
	canvas.onmousedown = function(e) {
		console.log(e);
	};

	canvas.addEventListener('mouseup', function(e) {
		console.log(e);
	});

	loopClock = setInterval(drawClock, 1000);

};

var drawClock = function() {
	ctxCanvas2D.clearRect(0,0,canvas.width, canvas.height);
	drawCircle();
	drawCenterPoint();
	writeNumbers();
	drawHands();

};

var convertRadiansToGrade = function(radians) {
	console.log(Math.ceil(radians * 180 / Math.PI));
	return radians * 180 / Math.PI;
};

var convertGradeToRadians = function(grade) {
	return grade * Math.PI / 180;
};

var writeNumbers = function() {
	var numbers 	= []; // [1,2,3,4,5,6,7,8,9,10,11,12];
	for(var i=1; i<13; i++)
		numbers.push(i);

	var angle 		= 0;
	var numberWidth = 0;
	var cWidth  = canvas.width;
	var cHeight = canvas.height;

	numbers.forEach(function(number){
		// Math.PI / 6 = 30 graus
		angle = Math.PI / 6 * (number - 3);
		numberWidth = ctxCanvas2D.measureText(number).width;
		ctxCanvas2D.fillText(number
		                     ,cWidth/2 + Math.cos(angle) * hand_radius - numberWidth/2
		                     ,cHeight/2 + Math.sin(angle) * hand_radius - FONT_HEIGHT/3);
	});

};

var drawCenterPoint = function() {
	var cWidth  = canvas.width;
	var cHeight = canvas.height;
	ctxCanvas2D.beginPath();
	ctxCanvas2D.arc(cWidth/2, cHeight/2, 5, 0, Math.PI*2, true);
	ctxCanvas2D.fill();
};

var drawHand = function(loc, isHour) {
	var angle = Math.PI * 2 * (loc / 60) - Math.PI/2;
	//convertRadiansToGrade(angle);

	var  a  = radius - hand_truncation - hour_hand_truncation
		,b  = radius - hand_truncation;

	var handRadius = isHour ? a : b;
	//console.log(isHour, handRadius);

	var cWidth  = canvas.width;
	var cHeight = canvas.height;
	ctxCanvas2D.moveTo(cWidth/2, cHeight/2);
	ctxCanvas2D.lineTo(cWidth/2 + Math.cos(angle) * handRadius
	                   ,cHeight/2 + Math.sin(angle) * handRadius);
	ctxCanvas2D.stroke();
};

var drawHands = function() {
	var date = new Date();
	var hour = date.getHours();
	hour = hour % 12;
	drawHand(hour * 5 + (date.getMinutes()/60) * 5, true);
	drawHand(date.getMinutes(), false);
	drawHand(date.getSeconds(), false);
};


window.onload = init;