

function Model() {
	this.counter = 0;
	this.countSubject = new Event(this)
}

Model.prototype = {
	increase: function() {
		this.counter += 1

		this.countSubject.fire();
	},

	getCounter: function() {
		return this.counter 
	}
}