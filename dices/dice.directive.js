(function(){
	angular.module('dices').directive('dice',diceDirective);
	
	function diceDirective(){
		return {
			restrict: 'EA',
			scope : {
				id : '=',
				number : '=',
				suite : '=',
				text : '=',
				image : '='
			},
			templateUrl : '/dices/dice.html'
		};
	}
})();