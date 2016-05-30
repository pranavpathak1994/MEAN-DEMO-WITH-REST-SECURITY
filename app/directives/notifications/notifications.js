/*
  sbAdminApp Directive
*/


(function() {
  
  var notifications = function(){
		return {
	        templateUrl:'scripts/directives/notifications/notifications.html',
	        restrict: 'E',
	        replace: true,
    	}
	}

  notifications.$inject = [];

  angular.module('MEANDemo').directive('notifications', notifications);    

}());

