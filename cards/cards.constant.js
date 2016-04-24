(function(){
	var cards = {order:[]};
	var suites = ['H','D','C','S'];
	for (var number = 1; number <= 13; number++) {
		for (var index in suites) {
			var suite = suites[index];
			var text = ''+number;
			if (text == '1') { text = 'A'; }
			if (text == '11') { text = 'J'; }
			if (text == '12') { text = 'Q'; }
			if (text == '13') { text = 'K'; }
			var image = './cards/images/';;
			if (suite=='H') { image += 'heart'; }
			else if (suite=='D') { image += 'diamond'; }
			else if (suite=='C') { image += 'club'; }
			else if (suite=='S') { image += 'spade'; }
			image += '.svg';
			var id = number+suite;
			var card = {id:id, number:number, suite:suite, text:text, image:image };
			cards[id]=card;
			cards.order.push(id);
		}
	}
	angular.module('cards').constant('CardsConstant',cards);
})();