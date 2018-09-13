

function Controller(model, view) {
	this.model = model;
	this.view = view;
	this.init();
}

Controller.prototype = {
	init: function() {
		this.view.countSubject.on(this.increase.bind(this))
	},

	increase: function() {
		this.model.increase()
	}
}