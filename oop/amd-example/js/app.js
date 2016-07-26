require.config({
	 //baseUrl: '../amd-example/js'
	 baseUrl: 'js'
	,paths: {
		 libs: '../../../libs/'
		,math: 'math/'
		,eventcontrol: '../../../libs/eventcontrol/'

	}
	,bundles: {
		'lib-trigonometry': ['fx']
	}
	,shim: {
		'useeventcontrol' : {
			deps: [
				 '../../../libs/jquery-1.9.1.min'
				,'eventcontrol/hammer.min'
				,'eventcontrol/eventcontrol.min'
			]
		}
	}
});

/*
	diferenca entre require e define

	require() eh usado para executar funcoes imediatas
	enquanto que define() eh utilizado para construcao de modulos
*/


require([
        'libs/jquery-1.9.1.min'
        //,'lib-trigonometry'
        //,'geom'
        //,'fx'
        //,'math/algebra'
        ,'eventcontrol/moment.min'
        ,'eventcontrol/hammer.min'
        ,'eventcontrol/eventcontrol.min'
        ,'test/useeventcontrol'], function(jq, moment, hammer, evt, useevt) {
	//console.log(require.toUrl(''));
	//console.log(geom.testImports());
	//console.log(geom.getReference() == geom);
	//console.log(trigonometry.getReference());
	//console.log(fx);
	//console.log(geom.execFxCos(45));
	//console.log(algebra);
	console.log(arguments);
	console.log(useevt.fx());
});

