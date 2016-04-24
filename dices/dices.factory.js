(function(){
	angular.module('dices').factory('DicesFactory',DicesFactory);
	
	DicesFactory.$inject = ['$http'];
	function DicesFactory($http){
		return {
			getDices : getDices
		};
		
		function getDices() {
			return $http({method:'GET',url:'/dices/dices.json'});
		}
	}
})();