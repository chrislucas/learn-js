define(['../pdfmake.min'], function() {
	var tabela = $('.table');
	var array_header = [];	
	$(tabela).find('th').each(function(i, e) {
		/*
		var mapa = {};
		mapa['text'] = $(e).text();
		mapa['style'] = 'tableHeader'
		mapa['alignment'] = 'center'
		*/
		var objeto = colData($(e).text(), 'tableHeader', 'center');
		objeto['fontSize'] = 14;
		array_header.push(objeto);
	});
	
	var dados_tabela = [];
	dados_tabela.push(array_header);
	//console.log($(tabela).find('tr'));
	//console.log($(tabela).find('tr').slice(1));

	// usar a funcao slice para recuperar
	// um subconjunto do conjutno de linhas da tabela
	// a partir da linha '1', pois a linha '0' contem
	// o header da tabela
	$(tabela).find('tr').slice(1).each(function(i, tr) {
		var td = $(tr).find('td');
		//console.log(td, i);
		var linha = [];
		/*
			Se o indice for divisivel por 3
			significa que eh uma linha que representa
			uma fase, subfase ou item
		*/
		if(i % 3 == 0) {
			/*
				as duas primeras colunas da linha que representa uma
				fase, subfase ou item, possui 
			*/
			$(td).slice(0, 2).each(function(i, e) {
				//console.log($(e))
				var text = $(e).text()
				if(i == 0) {
					text = text.substring(0, 20);
					text += '...';
				}
				var objeto = colData(text, 'tableRow', 'center');
				objeto['rowSpan'] = 3;
				objeto['fontSize'] = 12;
				linha.push(objeto);
			});
			
			$(td).slice(2).each(function(i, e) {
				var text = $(e).text();
				var objeto = colData(text, 'tableRow', 'center');
				objeto['fontSize'] = 12;
				linha.push(objeto);
			});
		} else {
			linha[0] = linha[1] = '';
			$(td).each(function(i, e) {
				var text = $(e).text();
				var objeto = colData(text, 'tableRow', 'center');
				objeto['fontSize'] = 12;
				linha.push(objeto);
			});
		}
		//console.log(linha);
		//console.log(new Array(linha), [linha]);
		//dados_tabela.push([linha]);
		dados_tabela.push(linha);
	});

	//console.log(dados_tabela);
	//console.log(ParseHtml);
	//console.log(array_header);
	//console.log(array_header.slice(0, 1));
	
	/*
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
		http://stackoverflow.com/questions/4049847/initializing-an-array-with-a-single-value
	
	//var array_widths = new Array(array_header.length).fill('*');
	
	var array_widths = Array.apply(null, {length: array_header.length}); //.map( function(value) {return value} );
	array_widths = array_widths.map(function(value) {
		return value === undefined ? '*' : value;
	});
	*/
	
	var array_widths = new Array(array_header.length);
	var idx = 0;
	while(idx < array_widths.length) {
		array_widths[idx++] = '*';
	}
	
	console.log(dados_tabela);
	
	var data = {
		 pageSize: 'A4'
		,pageOrientation: 'landscape'
		,content: [
			
			{
				 style: 'tableExample'
				,color: '#444'
				,table: {
					 widths: array_widths
					,headerRows: 1
					//,keepWithHeaderRows: 1
					,body: dados_tabela//dados_tabela.slice(0, 2)
				}
			}
			,{
				 style: 'tableExample'
				,color: '#444'
				,table: {
					 widths: array_widths
					,headerRows: 1
					//,keepWithHeaderRows: 1
					,body: dados_tabela//dados_tabela.slice(0, 2)
				}
			}
		]
	};
	//pdfMake.createPdf(data).open()

	pdfMake.createPdf(data).download('meuarquivo.pdf', function(){
		console.log('meuarquivo.pdf');
	});
	
}
);	// fim module

var colData = function(text, style, align) {
	var object = {
		 text: text
		,style: style
		, alignment: align
	};
	
	return object;
};
