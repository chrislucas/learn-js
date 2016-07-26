define(function() {

	var clone = function(object) {

		if(object != null && typeof object == 'object') {
			var copy = object.constructor();
			for(var attr in object) {
				if((object.hasOwnProperty(attr))) {
					copy[attr] = object[attr];
				}
			}
			return copy;
		}
	};

	var refDataTable;

	var drawTable = function() {
		refDataTable = $('#datatable').DataTable({
	        'bScrollInfinite'	: true
	        ,'bScrollCollapse'	: true
	        ,'sScrollY'		: true
	        ,'scrollX'		: true
	        ,'bDeferRender'	: true
	    	,'bDestroy'		: true
	    });
	};

	var redrawColsTable = function(columns, dataCol) {
		refDataTable = $('#datatable').DataTable({
	        'bScrollInfinite'	: true
	        ,'bScrollCollapse'	: true
	        ,'sScrollY'		: true
	        ,'scrollX'		: true
	        ,'bDeferRender'	: true
	    	,'bDestroy'		: true
	    	,"aoColumns"	: columns
        	,"aoColumnDefs"	: dataCol
	    });

	    refDataTable.draw();
	    //console.log(refDataTable);
	}

	return {
		load: function() {
			$(document).ready(function() {

				drawTable();

			    $('#addcolumn').on('click', function(evt) {
			    	evt.preventDefault();
			    	//var settings  = refDataTable.fnSettings(); nao existem
					//console.log(refDataTable.data());
			    	var settings 		= refDataTable.settings();
					var ctxTable 		= refDataTable.context[0];

					var columns 		= settings.columns();
					var ctxColumns 		= columns.context[0];

			    	var columnCopy 		= clone(ctxColumns.aoColumns[0]);
			    	var qColumns 		= ctxColumns.aoColumns.length - 2;
			    	columnCopy.sTitle 	= 'Mês ' + ( (qColumns + 1) % 12);
			    	columnCopy.idx 		= ctxColumns.aoColumns.length;
			    	/*
					var tag = '<th>' +  'Mês ' + ( (qColumns + 1) % 12)  + '</th>';
					$('#datatable thead tr').append(tag);
					*/
					//var copyDataStructure = clone(ctxColumns.aoData[0]);
					//console.log(copyDataStructure);
/*
					for(var i in copyDataStructure) {
						if(Array.isArray(copyDataStructure[i])) {
							for(var j in copyDataStructure[i]) {
								copyDataStructure[i][j] = ' ';
							}
						}
					}
			    	ctxColumns.aoData.push(copyDataStructure);
*/
			    	ctxColumns.aoColumns.push(columnCopy);
			    	//ctxColumns.aoHeader.push();
			    	//ctxColumns.aoPreSearchCols.push(clone(ctxColumns.aoPreSearchCols[0]));
					//console.log(ctxColumns == refDataTable.context[0], ctxColumns.aoColumns);
/*
					for(var x in  ctxColumns.aoColumns) {
						console.log(x,  ctxColumns.aoColumns[x], ctxColumns.aoColumns[x].nTh.style.width);
					}
*/
					console.log(ctxTable);

					//console.dir(ctxTable.oApi._fnGetUniqueThs(ctxTable, $('#datatable').find('thead')[0]));

					//refDataTable.destroy();
			    	//console.log(ctxTable, ctxColumns/*ctxColumns,ctxTable.oApi._fnGetColumns(), refDataTable.columns()*/);
					//

					//ctxTable.oApi._fnApplyColumnDefs(refDataTable.context[0].aoColumns, columnCopy);
			    	//ctxTable.oApi._fnAddColumn(refDataTable.context[0], null);

			    	redrawColsTable(ctxTable, ctxColumns.aoColumns);
			    });
			});

			$('#addLine').on('click', function(evt) {
				evt.preventDefault();
				console.dir(refDataTable.context[0].oInstance);
				refDataTable.context[0].oInstance.fnAddData(['Teste 1', 'R$ 20.00', 'R$ 30.00']);
				//refDataTable.context[0].oInstance.fnDestroy();
				//refDataTable.context[0].oInstance.fnDraw();
				//$('#addcolumn').fnAddData(['Teste 1', 'R$ 20.00', 'R$ 30.00']);
			});
		}
	}
});