angular
	.module('app')
	.controller('aboutController',['$scope',function($scope){
			$scope.title="myhomescope";
			$scope.items=['firstthing','secondthing','thirdthing'];

	}]);