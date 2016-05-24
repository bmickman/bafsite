		angular
			.module('app',['ui.router','ui.bootstrap','ngAnimate'
		
			/*,'uiGmapgoogle-maps'*/
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
					})
					.state('about',{
						url: '/',
						templateUrl: 'assets/templates/about.html'
						/*controller: 'aboutController'*/
					})
					.state('registration',{
						url: '/',
						templateUrl:'assets/templates/registration.html'
						/*controller: 'assets/controllers/registrationController'*/
					})
					.state('contact',{
						url: '/',
						templateUrl: 'assets/templates/contact.html',
						controller: 'homeController'
					});
				
				$locationProvider.html5Mode(true);
			
			}]);
			