var app = angular.module("tinyurlApp", ["ngRoute"]); 
//1. import src in index.html
//2. the tinyurl will apply "ngRoute" module
//3. 

//get routePorvider=define route
//config the router at front-end
app.config(function ($routeProvider) {
	$routeProvider
	.when("/" ,{
			templateUrl: "./public/views/home.html ",
			controller: ""
	});
});
