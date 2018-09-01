hbiApp.controller('productListController', ['$scope','$http', 'productlistService','$stateParams', function($scope, $http, productlistService,$stateParams) {
	
	$scope.init = function(){ 
		productlistService.getProducts($stateParams.categoryId)  // get all products based on category
		.then(function(response) {
			$scope.products = response.data.results;
		});
	}
    
}]);