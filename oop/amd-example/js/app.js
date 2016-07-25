require.config({
	 //baseUrl: '../amd-example/js'
	 baseUrl: 'js'
	,paths: {
		libs: '../../libs/'
		,math: 'math/'
	}
	,bundles: {
		'lib-trigonometry': ['fx']
	}
});

/*
	diferenca entre require e define

	require() eh usado para executar funcoes imediatas
	enquanto que define() eh utilizado para construcao de modulos
*/


require(['lib-trigonometry', 'geom', 'fx', 'math/algebra'], function(trigonometry, geom, fx, algebra) {
	//console.log(require.toUrl(''));
	//console.log(geom.testImports());
	//console.log(geom.getReference() == geom);
	//console.log(trigonometry.getReference());
	//console.log(fx);
	//console.log(geom.execFxCos(45));
	console.log(algebra);
	algebra.rods()
});

