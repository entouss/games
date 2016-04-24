(function(){
	angular.module('app')
		.config(function($routeProvider){
			$routeProvider
				.when('/',{
					templateUrl : 'app.html',
					controller : 'AppController',
					controllerAs : 'app'
				})
				.otherwise({redirectTo:'/'});
		});
		
	
})();