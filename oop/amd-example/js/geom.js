define(['lib-trigonometry'], function(t) {
	return {
		testImports: function() {
			return [trigonometry];
		}

		,getReference: function() {
			return this;
		},

		execFxCos: function(x) {
			return trigonometry.cos(x);
		}
	};
});
