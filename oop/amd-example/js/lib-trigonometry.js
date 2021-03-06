define(function(){
	return {
		cos: function(x) {
			return Math.cos(x * Math.PI / 180);
		}

		,sin: function(x) {
			return Math.sin(x * Math.PI / 180);
		}

		,tan: function(x) {
			return Math.tan(x * Math.PI / 180);
		}
	
		,getReference: function() {
			return this;
		}
	}
});


define('fx', function() {
	return{
		fx: function() {
			return Math.random(100) + 10
		}
	}
});
