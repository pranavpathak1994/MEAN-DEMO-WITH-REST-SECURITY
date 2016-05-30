/**
 * main cotroller to manage task
 */


(function() {
	
	var MainController = function(userServices,$location,$cookies,$http,$rootScope,toaster,$state,$window) {
	
		var vm = this;
		vm.header;

		vm.login=function(){
			
			userServices.login(vm.data).then(function(response) {
				
					if(response.data.status!="error"){
						window.jwtToken = "Bearer " +response.data.body.token;
						$http.defaults.headers.common['Authorization'] = $window.jwtToken;
						$cookies["isLogin"]=true;
						$state.go("welcome");
					}
					else{
						toaster.error("", "Incorrect Username or Password.!");
						vm.data.password="";
					}
				},
				function(response) {
					toaster.error("", "Opps, Something is worng..!");
				});
		}
		
		vm.logout=function(){
			
			userServices.logout().then(function(response) {
				
				 $cookies["isLogin"]=false;
				 $state.go("login");
				},
				function(response) {
					toaster.error("", "Opps, Something is worng..!");
				});
		}
		
		vm.register=function(){
			userServices.register(vm.data).then(function(response) {
				toaster.success({title: "", body:"Registration Successfully."});
					$state.go("login");
				},
				function(response) {
					
					toaster.error("", "Opps, Something is worng..!");
				});
		}
		
		vm.getUser=function(){
			
			userServices.getUser(vm.header).then(function(response) {
					vm.data=response.data;
				},
				function(response) {
					toaster.error("", "Opps, Something is worng..!");
				});
		}
	}
	
	MainController.$inject = ['userServices','$location','$cookies','$http','$rootScope','toaster','$state','$window'];
	
    
    angular.module('MEANDemo').controller('MainController', MainController);

}());


