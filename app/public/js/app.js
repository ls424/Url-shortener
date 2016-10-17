var app = angular.module("tinyurlApp", ["ngRoute", "ngResource"]); 
//1. import src in index.html
//2. the tinyurl will apply "ngRoute" module
//3. 

//get routePorvider=define route
//config the router at front-end
//routeProvider contains some function to parse the request
//when request is "/", use the template and controller to handle it
app.config(function ($routeProvider) {
	$routeProvider
		.when("/" ,{
			templateUrl: "./public/views/home.html",
			controller: "homeController" //js code
		})
		.when("/urls/:shortUrl", { //handle when url is shorturl
			templateUrl: "./public/views/url.html",
			controller: "urlController" 
	});
});
