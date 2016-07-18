'use strict';
window.onload = function() {
	var req = new XMLHttpRequest();
	req.onload = reqListener();
	var url = "http://wgx.com.br/demo/serrat/api/index.php/usuario?token=wgx@_2k15!&format=json"
	req.open("get", url, true);
	req.send();
};

var reqListener = function() {
	console.log(this);
};