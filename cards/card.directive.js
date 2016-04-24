(function(){
	angular.module('cards').directive('card',cardDirective);
	
	function cardDirective(){
		return {
			restrict: 'EA',
			scope : {
				id : '=',
				number : '=',
				suite : '=',
				text : '=',
				image : '='
			},
			templateUrl : 'cards/card.html'
		};
	}
})();