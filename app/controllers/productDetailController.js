hbiApp.controller('productDetailController', ['$scope', '$http', '$q', '$state', 'productlistService', '$stateParams' , 'productdetailService' , function($scope, $http, $q, $state, productlistService, $stateParams, productdetailService) {
	
	$scope.init = function(){ 
		console.log("Product Details");
	}
	//console.log($stateParams);
	$scope.productDetail = function() { 
	    var productId = $stateParams.productId;
        $state.go("product-detail");	
		productdetailService.getProductsById(productId).then(function(response, status, headers, config) {         
           $scope.masterDataObj = response.data.masterData.current;
           console.log($scope.masterDataObj);
		}).catch(function(response, status, headers, config) {
		   console.log(response);	  
		})
	}
		
    
}]);