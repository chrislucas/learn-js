/**
	links
	https://developer.chrome.com/apps/app_codelab_intro
*/

chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create('index.html',{
		id: 'main',
		bounds: {
			width: 620,
			height: 500
		}
	});
	//console.log(chrome);
	console.log(chrome.app.window.getAll());
});