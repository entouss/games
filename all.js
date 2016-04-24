(function(){
	angular.module('app',['ngRoute']);
})();
(function(){
	angular.module('app')
		.controller('BodyController',function(){
			this.title = 'Hello World';
		});
})();
(function(){
	angular.module('app')
		.directive('card',function(){
			return {
				restrict: 'E',
				scope : {
					title : '=title'
				},
				template : '<h1>{{title}}</h1>'
			};
		});
})();
(function(){
	angular.module('app')
		.config(function($routeProvider){
			$routeProvider.when('/card',{
				templateUrl : 'templates/card.html'
			})
		});
		
	
})();