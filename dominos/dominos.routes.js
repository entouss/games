(function(){
	angular.module('dominos')
		.config(function($routeProvider){
			$routeProvider
			.when('/dominos',{
				templateUrl : '/dominos/dominos.html',
				controller : 'DominosController',
				controllerAs : 'dominos'
			})
			.when('/dominos/all',{
				templateUrl : '/dominos/dominos.html',
				controller : 'DominosController',
				controllerAs : 'dominos'
			})
			.when('/dominos/random/',{
				templateUrl : '/dominos/dominos.html',
				controller : 'DominoController',
				controllerAs : 'dominos'
			})
			.when('/dominos/random/:count',{
				templateUrl : '/dominos/dominos.html',
				controller : 'DominoController',
				controllerAs : 'dominos'
			})
			.when('/dominos/:id',{
				templateUrl : '/dominos/dominos.html',
				controller : 'DominoController',
				controllerAs : 'dominos'
			})
			.otherwise({redirectTo:'/dominos'});
		});
		
	
})();