// Application module

var crudApp = angular.module('crudApp',['ui.bootstrap','angularUtils.directives.dirPagination']);

crudApp.controller("ctrlCRUD",['$scope','$filter','$http','$rootScope','$uibModal', function($scope,$filter,$http,$rootScope,$uibModal ){	

   
    getInfo();
   
	//---------------------------------------------------------------------------------
   
	 $scope.sort = function(keyname){
        $scope.sortKey = keyname;   
        $scope.reverse = !$scope.reverse; 
    }
	
	//----------------------------------------------------------------------------------
	
	$scope.showModal = function(item){
		$uibModal.open({
			  templateUrl: 'updateProduct.html',
			  controller: 'ctrlUpdateProduct', 
			  resolve: {
							item: function () {
								$scope.currentUser = {};
								$scope.currentUser = item;
								return item;
							}
						}					
			  
		 })
		.result.then(
			function () {    
			}, 
			function () {
			}
		);
	}

	//----------------------------------------------------------------------------------
	
	$scope.showModal1 = function(){
			$uibModal.open({
				  templateUrl: 'newProduct.html',
				  controller: 'ctrlNewProduct', 
			 })
			.result.then(
				function () {    
				}, 
				function () {    
				}
			);
		}


	//----------------------------------------------------------------------------------	
	
	
	$rootScope.$on("CallParentMethod", function(){
           
		
		getInfo();
		   
        });

	//----------------------------------------------------------------------------------	

	function getInfo(){

		$http.post('databaseFiles/getProducts.php').then(function(data){

		$scope.items = data.data;
		
		});
		}//getInfo
				
	//----------------------------------------------------------------------------------
				
	$scope.deleteInfo = function(info){
		
		
		$http.post('databaseFiles/deleteProduct.php',{"del_id":info.productCode}).then(function(data){
		
		if (data.data == true) {getInfo();}
		
		});
		
	}//deleteInfo				


}]);////crudApp.controllers


crudApp.controller("ctrlNewProduct", function ($scope,  $uibModalInstance,$http,$rootScope) {
  
	$scope.ok = function (info) {
	  
		$scope.insertInfo(info);
		$uibModalInstance.close();
		
	};

	$scope.cancel = function () {
	  
		$uibModalInstance.dismiss('cancel');
		
	};
  
	$scope.getInfo = function() {

		$rootScope.$emit("CallParentMethod", {});
		
	}
  
	$scope.insertInfo = function(info){
	

		$http.post('databaseFiles/insertProduct.php',{"productCode":info.productCode,"productName":info.productName,"productLine":info.productLine,"productScale":info.productScale,"productVendor":info.productVendor,"productDescription":info.productDescription,"quantityInStock":info.quantityInStock,"buyPrice":info.buyPrice,"MSRP":info.MSRP}).then(function(){
		
		$scope.getInfo();
		
	});
	}

  
});//ctrlNewProduct

crudApp.controller("ctrlUpdateProduct", function ($scope,  $uibModalInstance,$http, item, $rootScope) {
 

	$scope.currentUser = {};
	$scope.currentUser = item;


	$scope.ok = function () {

		$scope.UpdateInfo($scope.currentUser);
		$uibModalInstance.close();
	
	};

	$scope.cancel = function () {

		$uibModalInstance.dismiss('cancel');
	
	};


	$scope.getInfo = function() {
		
		$rootScope.$emit("CallParentMethod", {});
	
	}


	$scope.UpdateInfo = function(info){

		$http.post('databaseFiles/updateProduct.php',{"productCode":info.productCode,"productName":info.productName,"productLine":info.productLine,"productScale":info.productScale,"productVendor":info.productVendor,"productDescription":info.productDescription,"quantityInStock":info.quantityInStock,"buyPrice":info.buyPrice,"MSRP":info.MSRP}).then(function(data){	

		if (data.data == true) {
		$scope.getInfo();
		}
		
		});
	}

});//ctrlUpdateProduct

	











