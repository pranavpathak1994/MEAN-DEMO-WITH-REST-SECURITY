
(function () {
    angular.module('MEANDemo', [
        'ui.router',
        'ui.bootstrap',
        'ngCookies',
        'toaster'    
    ])

    var config= function ($stateProvider,$urlRouterProvider,$httpProvider) {
    
        $urlRouterProvider.otherwise('/login');
        
        /**
         * for authentication using cookie
         */
        
        $httpProvider.defaults.withCredentials = true;

        /**
         * to define states
         */
        
        $stateProvider
          .state('login',{
            templateUrl:'static/views/login.html',
            controller:'MainController',
            controllerAs: 'vm',
            url:'/login'
        })
        .state('403',{
            templateUrl:'static/views/403.html',
            url:'/403'
        })
        .state('welcome',{
            templateUrl:'static/views/welcome.html',
            controller:'MainController',
            controllerAs: 'vm',
            url:'/welcome',
            access: {
                 requiredPermissions: ['Admin']
            }
        })
        .state('register',{
            templateUrl:'static/views/registration.html',
            controller:'MainController',
            controllerAs: 'vm',
            url:'/registration'
        })
        
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider','$httpProvider'];

    /*
        Secrue route
    */

    var authRun = function($location, $rootScope, $cookies, $state, $stateParams,$window,$http) {
         $rootScope.$state = $state;
         $rootScope.$stateParams = $stateParams;

         //fired when transition begins
         $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            /*$http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;*/
        $http.defaults.headers.common['Authorization'] = $window.jwtToken;
             if (toState && toState.access) {
                 var login=$cookies['isLogin'];
                 if(login==true){
                     /*var isRole=false;
                     angular.forEach($rootScope.role, function(value, key) {
                         if(toState.access.requiredPermissions.indexOf(value) != -1){
                             isRole=true;
                          }
                        });
                     
                     if(!isRole){
                         $state.go("login");
                         event.preventDefault();
                     }*/
                         
                    $state.go("welcome");
                    event.preventDefault();
                 }else{
                
                     $state.go("login");
                     event.preventDefault();
                 }
             }
             

             if(toState.url == '/login' && $cookies['isLogin']===true ) {
                 $state.go("welcome");
                 event.preventDefault();
             }

         });
     }
     
    authRun.$inject = ['$location', '$rootScope','$cookies', '$state', '$stateParams','$window','$http'];


    angular.module('MEANDemo').config(config);
    angular.module('MEANDemo').run(authRun);

    

}());



