hbiApp.factory('productlistService', function($http, headerService) { 
    return {

    getProducts: function (categoryId) { 
				  return $http({
						method: 'GET',
						url: "https://api.sphere.io/hnb-59/product-projections/search?filter=categories.id: subtree(\"a8f9d134-7007-453e-8f04-83fdd1a67b92\")",
						headers: {
							"Authorization": headerService.sessionGet("configData").header
						},
						complete: function() {
							console.log('done');
						}
					})
    },
	getCategories: function () {
				  return $http({
						method: 'GET',
						url: "https://api.sphere.io/hnb-59/categories",
						headers: {
							"Authorization": headerService.sessionGet("configData").header
						},
						complete: function() {
							console.log('done');
						}
					})
    },
	createCart: function () {
				  return $http({
						method: 'GET',
						url: "https://api.sphere.io/hnb-59/carts",
						headers: {
							"Authorization": headerService.sessionGet("configData").header
						},
						complete: function() {
							console.log('done');
						}
					})
    },
	cartActions: function (cart, input) {
				  return $http({
						method: 'GET',
						url: "https://api.sphere.io/hnb-59/carts/" + cart.id,
						params: input,
						headers: {
							"Authorization": headerService.sessionGet("configData").header
						},
						complete: function() {
							console.log('done');
						}
					})
    }
  };
});
