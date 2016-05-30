/*
  sbAdminApp Directive
*/


(function() {
  
  var sidebarSearch = function() {
    return {
        templateUrl:'scripts/directives/sidebar/sidebar-search/sidebar-search.html',
        restrict: 'E',
        replace: true,
        scope: {
        },
        controller:function($scope){
          $scope.selectedMenu = 'home';
        }
    }
  }

  sidebarSearch.$inject = [];

  angular.module('MEANDemo').directive('sidebarSearch', sidebarSearch);    

}());

  