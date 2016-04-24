(function(){
	angular.module('cards')
	.controller('CardsController',CardsController)
	.controller('CardController',CardController);
	
	CardsController.$inject = ['CardsConstant','CardsFactory','$routeParams'];
	function CardsController(CardsConstant,CardsFactory,$routeParams){
		var ctrl = this;
		var cards = [];
		if ($routeParams.id) {
			cards.push(CardsConstant[$routeParams.id]);
		} else {
			for (var index in CardsConstant.order) {
				var id = CardsConstant.order[index];
				cards.push(CardsConstant[id]);
			}
		}
		this.cards = cards;
		
		/*CardsFactory.getCards().success(function(cards){
			ctrl.cards = cards;
		})*/;
	}
	
	CardController.$inject = ['CardsConstant','CardsFactory','$routeParams'];
	function CardController(CardsConstant,CardsFactory,$routeParams){
		var ctrl = this;
		var cards = [];
		if ($routeParams.id) {
			cards.push(CardsConstant[$routeParams.id]);
		} else {
			var cardCount = $routeParams.count || 7;
			var taken = {};
			for (var i = 0; i < cardCount; i++){
				var random = parseInt(Math.random()*CardsConstant.order.length);
				var card = JSON.parse(JSON.stringify(CardsConstant[CardsConstant.order[random]]));
				if(taken[card.id]){
					i--;
				} else {
					cards.push(card);
					taken[card.id] = true;
				}
			}
		}
		this.cards = cards;
		
		/*CardsFactory.getCards().success(function(cards){
			ctrl.cards = cards;
		})*/;
	}
})();