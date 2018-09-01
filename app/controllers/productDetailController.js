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
           $scope.setProductData($scope.masterDataObj);
		}).catch(function(response, status, headers, config) {
		   console.log(response);	  
		})
	}
	
	$scope.setProductData = function(productObj) { 
		if (productObj.masterVariant.attributes) {
			angular.forEach(productObj.masterVariant.attributes, function(item, key){
				if ('points' === item.name) {
					$scope.points = item.value;
				}
				if ('pricePerUOM' === item.name) {
					$scope.pricePerUOM = item.value;
				}
				if ('Size' === item.name) {
					$scope.size = item.value;
				}
			});
		}
		if (productObj.masterVariant.sku) {
			$scope.sku = productObj.masterVariant.sku.replace('sku_', '');
		}
	}
	
	$scope.addToBag = function() { 
		$state.go("checkout");
	}
		
    
}]);