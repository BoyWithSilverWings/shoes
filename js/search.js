$(function(){

	var shoes = {"shoes":[
		{
			"name": "Asics\
	Fuzex Tr Blue Training Shoes",
			"brand": "Asics",
			"price": "9999",
			"category": "Training Shoes",
			"material": "Rubber",
			"image": "http://static3.jassets.com/p/Asics-Fuzex-Tr-Blue-Training-Shoes-1820-8865172-1-pdp_slider_l.jpg"
		},
		{
			"name": "Louis Philippe\
	Black Lifestyle Shoes",
			"brand": "Louis Phillippe",
			"price": "4999",
			"category": "Lifestyle Shoes",
			"image": "http://static2.jassets.com/p/Louis-Philippe-Black-Lifestyle-Shoes-7706-3444691-1-pdp_slider_l.jpg"
		}]
	};
	console.log("Here");
	var FJS = FilterJS(shoes, '#search-results', {
	  template: '#search-template',
	  filter_on_init: true, // Default filter_on_init is false
	  
	});
});