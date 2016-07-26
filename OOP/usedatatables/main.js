'use strict';

/*
http://stackoverflow.com/questions/33723298/datatables-trying-to-access-datatables-net-js-with-requirejs
*/

require.config({
	 baseUrl: ''
	//,waitSeconds: 15,
    ,urlArgs : "bust="+new Date().getTime()
	,paths: {
		 'jquery': '../../libs/datatables/jquery/jquery.min'
	 	,'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min'

		//,'datatables' : '../../libs/datatables/datatables.min'
        ,'datatables.net' : '../../libs/datatables/DataTables-1.10.12/js/jquery.dataTables'
        ,'datatables.net-bs' : '../../libs/datatables/DataTables-1.10.12/js/dataTables.bootstrap.min'

        //Dependencies
        ,'datatables.net-autofill' : '../../libs/datatables/AutoFill-2.1.2/js/dataTables.autoFill.min'
        //,'datatables.net-editor' : "../../libs/datatables/Editor-1.5.2/js/dataTables.editor.min"
        //,'datatables-editor-bootstrap' : "../../libs/datatables/Editor-1.5.2/js/editor.bootstrap.min"
        ,'datatables.net-buttons' : '../../libs/datatables/Buttons-1.2.1/js/dataTables.buttons.min'
        //'datatables.net-buttons' : '../../libs/datatables/Buttons-1.1.0/js/buttons.bootstrap.min'

        //Extra modules
        ,'datatables.net-buttons-bs' : '../../libs/datatables/Buttons-1.2.1/js/buttons.bootstrap.min'
        ,'datatables.net-colreorder' : "../../libs/datatables/ColReorder-1.3.3/js/dataTables.colReorder.min"
        ,'datatables.net-rowreorder' : "../../libs/datatables/RowReorder-1.1.2/js/dataTables.rowReorder.min"
        ,'datatables.net-scroller' : "../../libs/datatables/Scroller-1.4.2/js/dataTables.scroller.min"
        ,'datatables.net-select' : "../../libs/datatables/Select-1.2.0/js/dataTables.select.min"
	}

	,shim: {
        'jquery' : {
            exports : 'jquery'
        },
        'bootstrap' : {
            deps : [ 'jquery' ],
            exports : 'Bootstrap'
        },
        'datatables' : {
            deps: ['jquery','bootstrap']
        },
        'script': {
            deps: ['datatables','datatables.net-colreorder','datatables.net-rowreorder','datatables.net-scroller','datatables.net-select']
        }
    }
});

/*
var loadDataTable = function() {
	$(document).ready(function() {
		console.log($.dataTable);
		$('#datatable').dataTable(function() {

		});
	})
};
*/

require(['jquery', 'datatables.net', 'test'], function($, datatables, test){
	//console.dir(require);
	var link 	= document.createElement('link');
	link.type 	= 'text/css';
	link.rel 	= 'stylesheet';
	link.href 	= '../../libs/datatables/datatables.min.css';
	var head = document.getElementsByTagName('head');

	head[0].appendChild(link);

	if(test !== undefined) {
		test.load();
	}

});


