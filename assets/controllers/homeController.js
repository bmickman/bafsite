angular
	.module('app')
	.controller('homeController',['$scope',function($scope){
			$scope.title="myhomescope";
			$scope.items=['firstthing','secondthing','thirdthing'];

	}]);