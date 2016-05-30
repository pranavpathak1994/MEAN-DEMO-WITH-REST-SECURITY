/*
	To define Constant
*/


(function() {
	
	var constant = {
		'rootUrl':'http://localhost:3000/'
	}
	constant.$inject = [];

	angular.module('MEANDemo').constant('constant', constant);    

}());



