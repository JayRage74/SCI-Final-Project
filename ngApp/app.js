let app = angular.module("eventsApp", ['ngResource', 'ui.router']).run(function($http, $rootScope){
  $rootScope.authenticated = false;
  $rootScope.current_user = '';

  $rootScope.signout = function(){
    $http.get('auth/signout');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
  };
});


app.config(($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/ngApp/views/home.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/ngApp/views/contact.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/ngApp/views/about.html'
    })
    .state('addEvent', {
      url: '/addEvent',
      templateUrl: '/ngApp/views/addevent.html'
    })
    .state('maps', {
      url: '/maps',
      templateUrl: '/ngApp/views/maps.html'
    })
    .state('login', {
      url:'/login',
      templateUrl: '/ngApp/views/login.html',
      controller: 'authController'
    })
    //the signup display
    .state('register', {
      url: '/register',
      templateUrl: '/ngApp/views/register.html',
      controller: 'authController'
    })
    .state('login', {
      url:'/calendar',
      templateUrl: '/ngApp/views/calendar.html',
      controller: 'demoController'
    })

});
