(function(){
	var dominos = {order:[]};
	for (var number1 = 0; number1 <= 6; number1++) {
		for (var number2 = 0; number2 <= 6; number2++) {
			var high = number1;
			var low = number2;
			if (high<low){
				high = number2;
				low = number1;
			}
			var text = high+''+low;
			var image = './dominos/images/';
			highimage = image + high + '.svg';
			lowimage = image + low + '.svg';
			var id = high+''+low;
			var domino = {id:id, high:high, low:low, text:text, highimage:highimage, lowimage:lowimage };
			if (!dominos[id]) {
				dominos[id]=domino;
				dominos.order.push(id);
			}
		}
	}
	angular.module('dominos').constant('DominosConstant',dominos);
})();