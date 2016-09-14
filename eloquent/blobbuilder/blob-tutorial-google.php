<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Blob Builder</title>
</head>
<body>
	<script type="text/javascript" charset="utf-8" async defer>
		
		/*
			https://developers.google.com/web/updates/2012/06/Don-t-Build-Blobs-Construct-Them
		
			'webkitURL' is deprecated usar window.URL
			porem window.URK nao tem os metodos createObjectURL, revokeObjectURL
			pesquisar como resolver essa bagaca
			

			Dar uma olhada no codigo
			https://github.com/eligrey/FileSaver.js/

			Cross Browser createObjectURL
			https://gist.github.com/pbojinov/0c31fb6381cbb4a650cd
			http://stackoverflow.com/questions/11277677/javascript-newbie-how-to-choose-between-window-url-createobjecturl-and-window

			https://hacks.mozilla.org/2013/02/cross-browser-camera-capture-with-getusermediawebrtc/

			https://www.nczonline.net/blog/2012/05/31/working-with-files-in-javascript-part-4-object-urls/
		*/
		console.dir(window.BlobBuilder);
		console.dir(window.WebKitBlobBuilder);
		console.dir(window.MozBlobBuilder);
		console.dir(window.MSBlobBuilder);
		var blobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
		console.log(blobBuilder);
	</script>
</body>
</html>
