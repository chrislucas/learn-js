require.config({
	 baseUrl: 'js/libs/'
	,paths: {
		math: 'math/'
	}
});



require(['math/lib-trigonometry', 'math/geom'], function(t, g) {
	var trigonometry = new Trigonometry();
	console.log(trigonometry.sin(45));
	console.log(trigonometry.cos(45));
	console.log(trigonometry.tan(45));
	console.log(t, g);
});
