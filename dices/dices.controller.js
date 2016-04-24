(function(){
	angular.module('dices')
	.controller('DicesController',DicesController)
	.controller('DiceController',DiceController);
	
	DicesController.$inject = ['DicesConstant','DicesFactory','$routeParams'];
	function DicesController(DicesConstant,DicesFactory,$routeParams){
		var ctrl = this;
		var dices = [];
		if ($routeParams.id) {
			dices.push(DicesConstant[$routeParams.id]);
		} else {
			for (var index in DicesConstant.order) {
				var id = DicesConstant.order[index];
				dices.push(DicesConstant[id]);
			}
		}
		this.dices = dices;
		/*DicesFactory.getDices().success(function(dices){
			ctrl.dices = dices;
		})*/;
	}
	
	DiceController.$inject = ['DicesConstant','DicesFactory','$routeParams'];
	function DiceController(DicesConstant,DicesFactory,$routeParams){
		var ctrl = this;
		var dices = [];
		if ($routeParams.id) {
			dices.push(DicesConstant[$routeParams.id]);
		} else {
			var diceCount = $routeParams.count || 2;
			for (var i = 0; i < diceCount; i++){
				var random = parseInt(Math.random()*DicesConstant.order.length);
				var dice = JSON.parse(JSON.stringify(DicesConstant[DicesConstant.order[random]]));
				dice.random = new Date().getTime();
				dices.push(dice);
			}
		}
		this.dices = dices;
		/*DicesFactory.getDices().success(function(dices){
			ctrl.dices = dices;
		})*/;
	}
})();