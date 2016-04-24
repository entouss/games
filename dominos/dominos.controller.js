(function(){
	angular.module('dominos')
	.controller('DominosController',DominosController)
	.controller('DominoController',DominoController);
	
	DominosController.$inject = ['DominosConstant','DominosFactory','$routeParams'];
	function DominosController(DominosConstant,DominosFactory,$routeParams){
		var ctrl = this;
		var dominos = [];
		if ($routeParams.id) {
			dominos.push(DominosConstant[$routeParams.id]);
		} else {
			for (var index in DominosConstant.order) {
				var id = DominosConstant.order[index];
				dominos.push(DominosConstant[id]);
			}
		}
		this.dominos = dominos;
		/*DominosFactory.getDominos().success(function(dominos){
			ctrl.dominos = dominos;
		})*/;
	}
	
	DominoController.$inject = ['DominosConstant','DominosFactory','$routeParams'];
	function DominoController(DominosConstant,DominosFactory,$routeParams){
		var ctrl = this;
		var dominos = [];
		if ($routeParams.id) {
			dominos.push(DominosConstant[$routeParams.id]);
		} else {
			var dominoCount = $routeParams.count || 10;
			var taken = {};
			for (var i = 0; i < dominoCount; i++){
				var random = parseInt(Math.random()*DominosConstant.order.length);
				var domino = JSON.parse(JSON.stringify(DominosConstant[DominosConstant.order[random]]));
				if(taken[domino.id]){
					i--;
				} else {
					dominos.push(domino);
					taken[domino.id] = true;
				}
			}
		}
		this.dominos = dominos;
		/*DominosFactory.getDominos().success(function(dominos){
			ctrl.dominos = dominos;
		})*/;
	}
})();