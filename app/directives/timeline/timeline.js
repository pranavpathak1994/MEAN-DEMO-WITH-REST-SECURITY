/*
  sbAdminApp Directive
*/


(function() {
  
  var timeline = function() {
    return {
        templateUrl:'scripts/directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
  }

  timeline.$inject = [];

  angular.module('MEANDemo').directive('timeline', timeline);    

}());

