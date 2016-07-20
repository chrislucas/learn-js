
var Trigonometry = function() {

};


Trigonometry.prototype.sin = function(value) {
	return Math.sin(value * Math.PI / 180);
};


Trigonometry.prototype.tan = function(value) {
	return Math.tan(value * Math.PI / 180);
};


Trigonometry.prototype.cos = function(value) {
	return Math.cos(value * Math.PI / 180);
};

