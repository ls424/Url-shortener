angular.module("tinyurlApp")
	.controller("homeController", ["$scope", "$http", "$location", function($scope, $http, $location) { //two-way data-biding,scope bind view's and controller 
		$scope.submit = function () {
			$http.post("/api/v1/urls", {
				longUrl: $scope.longUrl
			}).success(function (data) {
				$location.path("/urls/" + data.shortUrl);
			});
		}
	}]);  //name, 