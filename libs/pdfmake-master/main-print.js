var require_baseUrl_override = 'pdfmake-master/';

require.config({
	 baseUrl: require_baseUrl_override
	,paths: {
		 jquery: 'libs/'
		,libs: 'libs'
		,filesaver: 'libs/filesaver'
		,build: 'build'
	}
	,shim: {
		'print' : {
			deps: ['jquery', 'build/pdfmake.min', 'build/vfs_fonts']
		}
	}
});

var libRequested = [
	'jquery/jquery-1.7.1.min'
	//,'build/pdfmake.min'
	//,'build/vfs_fonts'
	,'../pdfmake.min'
	//,'../pdfmake'
	,'../vfs_fonts'
	,'filesaver/filesaver'
	//,'libs/parser-component'
	,'../print'
];
	
require(libRequested, function() {
	console.log('main-print');
}); //require
	
