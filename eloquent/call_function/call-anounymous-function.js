'use strict';

var users = [new User(1, 'Chris'), new User(2, 'Matherson')];

function runTest() {
	for (var idx in users) {
		(function(k, v) {
			this.func = function() {};
			console.log(/*this, */k, v , Object.getOwnPropertyNames(this));
		}).call(users[idx], idx, 2);
	}
}

