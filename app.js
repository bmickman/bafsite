		angular
			.module('app',['ui.router','ui.bootstrap','ngAnimate'
			])
			.controller('headerController',function($scope){
				$scope.isCollapsed=true;
				})
			.config(['$urlRouterProvider','$stateProvider','$locationProvider',function($urlRouterProvider,$stateProvider,$locationProvider){
				
				$urlRouterProvider.otherwise('/');
				
				$stateProvider
					.state('home',{
						url: '/',
						templateUrl: 'assets/templates/home.html',
						controller: 'homeController'
					})
					.state('directory',{
						url: '/',
						templateUrl: 'assets/templates/directory.html',
						controller: 'homeController'
					})/*
					.state('about',{
						url: '/',
						templateUrl: 'assets/templates/about.html',
						controller: 'homeController'
					})
					.state('registration',{
						url: '/',
						templateUrl:'assets/templates/registration.html'
					})
					.state('contact',{
						url: '/',
						templateUrl: 'assets/templates/contact.html',
						controller: 'homeController'
					})*/
					.state('sponsors',{
						url: '/',
						templateUrl: 'assets/templates/sponsors.html',
						controller: 'homeController'
					});
				
				$locationProvider.html5Mode(true);
			
			}]);
			