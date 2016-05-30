
/**
 * various services to call remote server
 */


(function() {
	
	var userServices = function($http,constant) {
		  return {
		    login : function(data) {
		    	return $http.post(constant.rootUrl+"login",$.param({'username':data.email,'password':data.password}),{headers: { 'Content-Type': 'application/x-www-form-urlencoded'}});
		    },
		    register :function(data){
		    	return $http.post(constant.rootUrl+"register",data);
		    },
		    getUser :function(header){
		    	return $http.get(constant.rootUrl+"api/users/current");
		    },
		    logout :function(){
		    	return $http.get(constant.rootUrl+"login/");
		    }
		  }
	}
	userServices.$inject = ['$http','constant'];
	
    
    angular.module('MEANDemo').factory('userServices', userServices);

}());

