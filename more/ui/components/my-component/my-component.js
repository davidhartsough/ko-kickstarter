var ko = require('knockout'),
	template = require('./my-component.html');

function viewModel(params) {
	this.givenValue = params.myValue;
}

module.exports = {
	viewModel: viewModel,
	template: template
};
