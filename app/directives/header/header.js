/*
  sbAdminApp Directive
*/


(function() {
  
  var header = function(){
		return {
        templateUrl:'scripts/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	}

  header.$inject = [];

  angular.module('MEANDemo').directive('header', header);    

}());
