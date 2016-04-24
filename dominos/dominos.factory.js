(function(){
	angular.module('dominos').factory('DominosFactory',DominosFactory);
	
	DominosFactory.$inject = ['$http'];
	function DominosFactory($http){
		return {
			getDominos : getDominos
		};
		
		function getDominos() {
			return $http({method:'GET',url:'/dominos/dominos.json'});
		}
	}
})();