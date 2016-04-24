(function(){
	angular.module('cards').factory('CardsFactory',CardsFactory);
	
	CardsFactory.$inject = ['$http'];
	function CardsFactory($http){
		return {
			getCards : getCards
		};
		
		function getCards() {
			return $http({method:'GET',url:'/cards/cards.json'});
		}
	}
})();