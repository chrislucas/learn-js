'use strict';

var reqListener = function() {
	//console.log('reqListener');
	console.log(this);
};

// https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/
// https://github.com/jovaneyck/CrossDomainRequestsInJavascript
/**
* estudo sobre cross domain request com javascript
* quando tentatmos fazer uma requisicao a partir de um dominio
* até outro (cross domain request), recebemos um erro.
* Isso ocorre por estarmos violando uma regra denominada Same Origin Policy(SOP);
* Uma medida de seguranca implementada nos browsers para restringir interacao entre
* documentos ou scripts que tenham origens diferentes
*/

/**
* A origem duma pagina eh definida atraves de seu protocolo, host
* e numero da porta. Vale ressaltar que codigos-fonte carregados de outro dpminio
* (como o codigo fonte jQuery referente a um CDN), sao executados na origem do HTML
* que inclue o script, nao no dominio onde estao hospedadps. o que nao caracteriza
* cross domain
*/

/**
*
*/

window.onload = function() {
	var url = [
		"http://wgx.com.br/demo/serrat/api/index.php/usuario?token=wgx@_2k15!&format=json"
		,"http://localhost:8088"
	]
	var method = "GET";
	//crossDomainTest1(url[0], method);
	CORSTest1(method, url[0]);
};

/**
* testando callback com a tecnica JSONP (Javascript Object Notation Padding)
* JSONP se baseia no fato que a tag <script> pode ter fontes de provenientes
* de diferentes origens.
* Quando browser processa a tag <script>, ele fará um get no conteudo do script
*

*/
var crossDomainCallbackJSONP = function(e) {
	//console.log(e.response);
	console.dir(e);
}


var crossDomainTest1 = function(url, method) {
	var req = new XMLHttpRequest();

	if("withCredentials" in req) {
		req.open(method, url, true);
	} else if(typeof XDomainRequest != "undefined") {
		req = new  XMLDomainRequest();
		req.open(method, url, true);
	} else {
		console.log('Error to create XMLHttpRequest object');
		return null;
	}

	if(req !== undefined || req !== null) {
		req.withCredentials = true;
		req.onload = reqListener;
		req.onreadystatechange = function() {
			console.log(req.readyState, req.status);
			if(req.readyState === 4 && req.status == 200) {
				//var json = JSON.parse(req.resposeText);
				console.log(req.response);
			} else {

			}
		};

		req.setRequestHeader('Access-Control-Allow-Headers', url);
		//req.setRequestHeader('Access-Control-Allow-Headers', "http://enzolutions.com/articles/2014/06/01/what-is-and-how-it-works-requirejs/");
		req.setRequestHeader('Content-Type', 'application/json');
		//onreadystatechange();
		//onload();
		send();
	}
};

/**
* Cross Origin Resource Sharing http://www.w3.org/TR/cors/
* http://www.eriwen.com/javascript/how-to-cors/
* CORS usa o cabeçalho do protocolo HTTP para controlar o acesso
* a um recurso remoto.
*
* Essa tecnica permite adicionar um cabeçalho na requisao
*/

var CORSTest1 = function(method, url) {

	//var map = {'a' : 0x0f, 'b' : 0x33};
	//console.log(typeof map, map, 'a' in map);

	if(XMLHttpRequest) {
		var req = new XMLHttpRequest();
		if('withCredentials' in req) {
			//req.withCredentials = true;
			req.open(method, url, true);
			//
			req.setRequestHeader('Content-Type', 'application/json');
			req.setRequestHeader('Access-Control-Allow-Origin', '*');
			req.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");;
			req.setRequestHeader('Access-Control-Allow-Methods', "`POST, GET, OPTIONS, DELETE, PUT, HEAD");

			req.onreadystatechange = function() {
				if(req.readyState === 4 && req.status >= 200 && req.status < 400) {
					console.log(req);
				} else {
					console.log('error response', req);
				}
			};
			req.send();
		}
	}
	else if(XDomainRequest) {
		var req = new XDomainRequest();
		req.open(method, url);
		//req.onerror = null;
		req.onload = function() {
			console.log(req);
		};
		req.send();
	}
	else {
		return null;
	}
};