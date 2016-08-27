var ko = require('knockout'),
	template = require('./hello-world.html');

function viewModel(params) {
	this.firstName = ko.observable(params.first);
	this.lastName = ko.observable(params.last);

	this.fullName = ko.pureComputed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);
}

module.exports = {
	viewModel: viewModel,
	template: template
};
