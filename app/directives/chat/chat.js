/*
	sbAdminApp Directive
*/


(function() {
	
	var chat = function(){
		return {
        templateUrl:'scripts/directives/chat/chat.html',
        restrict: 'E',
        replace: true,
    	}
	}

	chat.$inject = [];

	angular.module('MEANDemo').directive('chat', chat);    

}());


