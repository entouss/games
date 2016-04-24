(function(){
	var dices = {order:[]};
	for (var number = 1; number <= 6; number++) {
			var text = ''+number;
			var image = '/dices/images/';
			image += number;
			image += '.svg';
			var id = number;
			var dice = {id:id, number:number, text:text, image:image };
			dices[id]=dice;
			dices.order.push(id);
		
	}
	angular.module('dices').constant('DicesConstant',dices);
})();