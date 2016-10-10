<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Brincando com 'this' e Callbacks</title>
</head>
<body>

	<script type="text/javascript" charset="utf-8">
			function Clazz1(cb) {
				if(typeof cb == 'Function') {
					var newCb = (function() {
						console.log(this);
					}).bind(this);

					newCb();
				}
			}

			function Clazz2(cb) {
				var that = this;
				if(typeof cb == 'Function') {
					var newCb = (function() {
						console.log(this, that);
					});

					newCb();
				}
			}

			new Clazz(function() { console.log('callback')})


	</script>

</body>
</html>