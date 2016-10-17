angular.module("tinyurlApp")
	.controller("urlController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) { //two-way data-biding,scope bind view's and controller 		
		$http.get("/api/v1/urls/" + $routeParams.shortUrl)
			.success(function (data) {
				$scope.longUrl = data.longUrl;
				$scope.shortUrl = data.shortUrl;
				$scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;

			});		
	}]);  //name, 