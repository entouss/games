(function(){
	angular.module('dominos').directive('domino',dominoDirective);
	
	function dominoDirective(){
		return {
			restrict: 'EA',
			scope : {
				id : '=',
				text : '=',
				image : '=',
				highimage : '=',
				lowimage : '='
			},
			templateUrl : '/dominos/domino.html'
		};
	}
})();