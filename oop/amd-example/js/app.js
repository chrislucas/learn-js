require.config({
	 baseUrl: 'js'
	,paths: {
		libs: '../../libs/'
	}
});


require(['trigonometry'], function(trigonometry) {
	console.log(trigonometry.tan(45));
});

