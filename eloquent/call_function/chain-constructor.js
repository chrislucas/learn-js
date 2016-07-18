	'use strict';
	var Entity = function(id, name) {
		if(id == undefined || id < 0)
			throw RangeError('Id nao pode ser nulo ou negativo');
		this.id 	= id;
		this.name 	= name;
	};

	var Person = function(id, name) {
		Entity.call(this, id, name);
	};

	var User = function(id, name) {
		Person.call(this, id, name);
	};

	var Employee = function(id, name) {
		Person.call(this, id, name);
	};

	var init = function() {
		var user1 = new User(1, 'James');
		var empl1 = new Employee(1, 'Antonny');
		//console.log( user1 instanceof User, empl1 instanceof Employee, user1 instanceof Person);
	};

	window.onload = init;
