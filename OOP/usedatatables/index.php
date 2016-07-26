<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Datatable Teste 1</title>
</head>
<body>
	<button id="addcolumn">Adicionar coluna</button>
	<button id="addLine">Adicionar linha</button>
   	<table id="datatable" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Descricao</th>
                <th>Valor Total</th>
                <th>Mês 1</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Serviço preliminar</td>
                <td>R$ 20.000,00</td>
                <td>R$ 20.000,00</td>
            </tr>
            <tr>
                <td>Limpeza</td>
                <td>R$ 5.000,00</td>
                <td>R$ 5.000,00</td>
            </tr>
            <tr>
                <td>Mobilizacao</td>
                <td>R$ 15.000,00</td>
                <td>R$ 15.000,00</td>
            </tr>
        </tbody>
    </table>

	<script src="../../libs/requirejs/require.min.js" type="text/javascript" charset="utf-8" async defer></script>
	<script src="main.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>