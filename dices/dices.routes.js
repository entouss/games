(function(){
	angular.module('dices')
		.config(function($routeProvider){
			$routeProvider
			.when('/dices',{
				templateUrl : '/dices/dices.html',
				controller : 'DicesController',
				controllerAs : 'dices'
			})
			.when('/dices/all',{
				templateUrl : '/dices/dices.html',
				controller : 'DicesController',
				controllerAs : 'dices'
			})
			.when('/dices/random/',{
				templateUrl : '/dices/dices.html',
				controller : 'DiceController',
				controllerAs : 'dices'
			})
			.when('/dices/random/:count',{
				templateUrl : '/dices/dices.html',
				controller : 'DiceController',
				controllerAs : 'dices'
			})
			.when('/dices/:id',{
				templateUrl : '/dices/dices.html',
				controller : 'DiceController',
				controllerAs : 'dices'
			})
			.otherwise({redirectTo:'/dices'});
		});
		
	
})();