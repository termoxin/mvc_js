

function View(model) {
	this.model = model;
	this.countSubject = new Event();
	this.init();
}

View.prototype = {
	init: function() {
		this.container = this.selector('.container');
		this.count = this.selector('.text-counter', this.container);
		this.increaseButton = this.selector('.increase-counter', this.container);

		this.increaseButton.addEventListener('click', this.increaseHandler.bind(this));

		this.model.countSubject.on(() => this.refreshCounter());

		return this;
	},

	increaseHandler: function() {
		this.countSubject.fire();
	},

	refreshCounter: function() {
		this.count.textContent = this.model.getCounter()
	},

	selector: function(selector, tobj) {
		let that = document || tobj 

		return that.querySelector(selector)
	}
}



