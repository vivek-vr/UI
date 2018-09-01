hbiApp.controller('productDetailController', ['$scope', '$http', '$q', '$state', 'productlistService', '$stateParams' , function($scope, $http, $q, $state, productlistService, $stateParams) {
	
	$scope.init = function(){ 
		console.log("Product Details");
	}
	//console.log($stateParams);
	$scope.productDetail = function() { 
	    var productId = $stateParams.productId;
        $state.go("product-detail");	
		productlistService.getProductsById(productId).then(function(response, status, headers, config) {
           console.log($scope.masterDataObj);				
		}).catch(function(response, status, headers, config) {
		   console.log(response);	  
		})
	}
		
    
}]);