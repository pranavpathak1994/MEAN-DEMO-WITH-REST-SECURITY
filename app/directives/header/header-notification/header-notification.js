/*
  sbAdminApp Directive
*/


(function() {
  
  var headerNotification = function(){
		return {
	        templateUrl:'scripts/directives/header/header-notification/header-notification.html',
	        restrict: 'E',
	        replace: true,
    	}
	}

  headerNotification.$inject = [];

  angular.module('MEANDemo').directive('headerNotification', headerNotification);    

}());
