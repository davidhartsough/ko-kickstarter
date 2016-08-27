var ko			= require('knockout'),
	director	= require('director');

// Page layouts
ko.components.register('hello-world',	require('../../ui/layouts/hello-world/hello-world.js'));
ko.components.register('my-page',		require('../../ui/layouts/my-page/my-page.js'));

// Components
ko.components.register('my-component',	require('../../ui/components/my-component/my-component.js'));

var ViewModel = function() {
	var self = this;

	// Observables
	this.greeting = ko.observable("Happy developing :)");
	this.page = ko.observable('hello-world');
	this.pageParams = ko.observable({
		first: "Planet",
		last: "Earth"
	});

	// Route handlers
	this.helloWorld = function() {
		self.page('hello-world');
		self.pageParams({
			first: "Planet",
			last: "Earth"
		});
	};
	this.myHelloWorld = function(george, washington) {
		self.page('hello-world');
		self.pageParams({
			first: george,
			last: washington
		});
	};
	this.myPage = function() {
		self.page('my-page');
		self.pageParams(null);
	};
};

var viewModel = new ViewModel();

var routes = {
	'/hello-world': viewModel.helloWorld,
	'/hello-world/gw/:george/:washington': viewModel.myHelloWorld,
	'/my-page': viewModel.myPage
};

var router = director.Router(routes);

router.init();

ko.applyBindings(viewModel);
