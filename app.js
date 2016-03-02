		angular
			.module('app',['ui.router','ui.bootstrap','ngAnimate',])
			.controller('headerController',function($scope){
				$scope.isCollapsed=true;
				})
			.config(['$urlRouterProvider','$stateProvider','$locationProvider',function($urlRouterProvider,$stateProvider,$locationProvider){
				$urlRouterProvider.otherwise('/');
				
				
				
				$stateProvider
					.state('home',{
						url: '/',
						templateUrl: 'assets/templates/home.html',
						/*controller: 'homeController'*/
					})

					.state('about',{
						url: '/about',
						templateUrl: 'assets/templates/about.html',
						/*controller: 'aboutController'*/
					})
					.state('registration',{
						url: '/registration',
						templateUrl: 'assets/templates/registration.html',
						/*controller: 'registrationController'*/
					})
					.state('contact',{
						url: '/contact',
						templateUrl: 'assets/templates/contact.html',
						/*controller: 'contactController'*/
					});
				
				//$locationProvider.html5Mode(true);
			
			}]);
			