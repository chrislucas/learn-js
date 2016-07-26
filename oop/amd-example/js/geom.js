define(['lib-trigonometry'], function(trigonometry) {
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
