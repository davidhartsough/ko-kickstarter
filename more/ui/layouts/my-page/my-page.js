var ko = require('knockout'),
	template = require('./my-page.html');

function viewModel() {
	this.pageTitle = ko.observable("My Page");
	this.items = ko.observableArray(['item1', 'item2', 'item3', 'item4', 'item5']);
}

module.exports = {
	viewModel: viewModel,
	template: template
};
