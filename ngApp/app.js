let app = angular.module("eventsApp", ['ngResource', 'ui.router']);

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


});
