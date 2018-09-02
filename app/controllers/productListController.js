hbiApp.controller('productListController', ['$scope','$http', 'productlistService','$stateParams', 'headerService', function($scope, $http, productlistService,$stateParams, headerService) {
	
	$scope.init = function(){
		var categoryId = headerService.sessionGet('categoryId');
		// productlistService.getProducts($stateParams.categoryId)  // get all products based on category
		productlistService.getProducts(categoryId)
		.then(function(response) {
			$scope.products = response.data.results;
			console.log("$scope.products");
			console.log($scope.products);
		});
	}
	$scope.setProduct = function(id) {
		headerService.sessionSet("productId",id);
	}
	
	$scope.quickAdd = function(action, productId,varient,quantity){
		cartActions(action, productId,varient,quantity);
	}
	
	function initCart() {
		if (headerService.sessionGet('cart') == null) {
			createCart();
		}
	}
    
	// get custId now hard coded
	function getCustId() {
		var customerId = "3fd76661-6529-48bf-879e-5f5e126f0d98"; // need to change this.
	}

	// create cart
	function createCart() {
		var data = {};
		var cart = {};
		data.currency = 'GBP'; // get from header
		data.customerId = getCustId(); // change this to custId after login implementation
		productlistService.createCart().then(function(response) {
			cart.id = resp.id;
			cart.version = resp.version;
			headerService.sessionSet('cart', cart)
		});
	}
	
	function cartActions(action, productId, varirantId, qty) {
    initCart();
    var cart = headerService.sessionGet('cart');
    var input = {};
    input.version = cart.version;
    var actions = [];
    var lineActions = {};
    lineActions.action = action;
    lineActions.productId = productId;
    lineActions.variantId = varirantId;
    lineActions.quantity = qty;
    actions.push(lineActions);
    input.actions = actions;
	productlistService.cartActions(cart,input).then(function(response) {
		cart.id = resp.id;
		cart.version = resp.version;
		headerService.sessionSet('cart', cart);
	});
}
	
}]);