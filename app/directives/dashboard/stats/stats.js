/*
  sbAdminApp Directive
*/


(function() {
  
  var stats = function() {
      return {
        templateUrl:'scripts/directives/dashboard/stats/stats.html',
        restrict:'E',
        replace:true,
        scope: {
          'model': '=',
          'comments': '@',
          'number': '@',
          'name': '@',
          'colour': '@',
          'details':'@',
          'type':'@',
          'goto':'@'
        }
        
      }
  }

  stats.$inject = [];

  angular.module('MEANDemo').directive('stats', stats);    

}());

