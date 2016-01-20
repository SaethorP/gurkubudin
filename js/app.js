(function(){
	var app = angular.module("storeApp", [ ]);


	app.controller("storeController", function(){
		this.products = gurkur;  	
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab; 
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});


	var gurkur = [
	{
		name: 'Gurka 1',
		price: 2.95,
		description: 'Rosalega góð gúrka með sítrónubragði',
		specs: 'Með 12bita cúrix áferð',
		reviews: 
		[
			{
			stars: 5,
			body: "I love this product!",
			author: "joe@thomas.com"
			},
			{
			stars: 1,
			body: "'Mér fannst hún rosalega góð, en finnst hún aðeins of riffluð',",
			author: "tim@hater.com"
			} 
		],
		canPurchase: true,
		soldOut: false,
		image: 'gurka1.png',
	},
	{
		name: 'Gurka 2',
		price: 1.00,
		description: 'Rosalega góð gúrka með sítrónubragði',
		specs: 'Með 12bita cúrix áferð',
		reviews: 
		[
			{
			stars: 5,
			body: "I love this product!",
			author: "joe@thomas.com"
			},
			{
			stars: 1,
			body: "'Mér fannst hún rosalega góð, en finnst hún aðeins of riffluð',",
			author: "tim@hater.com"
			} 
		],
		canPurchase: true,
		soldOut: false,
		image: 'gurka2.jpg',
	},
	{
		name: 'Gurka 3',
		price: 5.000,
		description: 'Rosalega góð gúrka með sítrónubragði',
		specs: 'Með 12bita cúrix áferð',
		reviews: 
		[
			{
			stars: 5,
			body: "I love this product!",
			author: "joe@thomas.com"
			},
			{
			stars: 1,
			body: "'Mér fannst hún rosalega góð, en finnst hún aðeins of riffluð',",
			author: "tim@hater.com"
			} 
		],
		canPurchase: true,
		soldOut: false,
		image: 'gurka3.jpg',
	}
	];

})();

