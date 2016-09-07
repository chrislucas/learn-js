var fx = function() {
	var fx = (function() {
		return 0x0fff00 & 0xffeecc;
	}());
	
	return fx;

};

var exec = function() {
	console.log(fx());
};


window.onload = exec;
