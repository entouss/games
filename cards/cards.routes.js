(function(){
	angular.module('cards')
		.config(function($routeProvider){
			$routeProvider
			.when('/cards',{
				templateUrl : 'cards/cards.html',
				controller : 'CardsController',
				controllerAs : 'cards'
			})
			.when('/cards/all',{
				templateUrl : 'cards/cards.html',
				controller : 'CardsController',
				controllerAs : 'cards'
			})
			.when('/cards/random/',{
				templateUrl : 'cards/cards.html',
				controller : 'CardController',
				controllerAs : 'cards'
			})
			.when('/cards/random/:count',{
				templateUrl : 'cards/cards.html',
				controller : 'CardController',
				controllerAs : 'cards'
			})
			.when('/cards/:id',{
				templateUrl : 'cards/cards.html',
				controller : 'CardController',
				controllerAs : 'cards'
			})
			.otherwise({redirectTo:'/cards'});
		});
		
	
})();