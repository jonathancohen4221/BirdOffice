var product = new Vue({
	el: '#product',
	data: {
		cart: 0,
		number: 1,
		price: 1050,
		contentTitle: 'Step behind the scenes of Havana’s theater',
		contentPrice: 1050.00,
		contentImage: '/images/img-product.jpg',
		contentDescription1: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam',
		contentDescription2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		contentValidity: 'Prices valid till 31.10.2019, yearly adjustment for conversion rate to EURO'
	},
	methods: {
		addToCart : function (){
			this.cart = this.number
		},
		addToNumber : function (){
			this.number += 1
		},
		removeToNumber : function (){
			if (this.number > 0){
				this.number -= 1
			}

		}

	}
})