// angular.module("meetupsApp", [])
// .controller("meetupsController", ($scope)
app.controller('eventsController', ['$scope', '$resource',
      ($scope, $resource) => {
        let Event = $resource('/api/events');
        // $scope.meetupsGreeting = "Hello from controller";
        // $scope.meetups = [
        //   {name:"Meetup 1"},
        //   {name:"Meetup 2"},
        //   {name:"Meetup 3"}
        // ];

        Event.query((results) => {
          $scope.events = results;
        });


        $scope.addEvent = () => {
          let event = new Event();
          event.name = $scope.eventName;
          event.$save((result) => {
            $scope.events.push(result);
            $scope.eventname = '';
          });
          // $scope.meetups.push({name:$scope.meetupName});
          // $scope.meetupName = '';

        }}]);


    app.controller('authController', function($scope, $http, $rootScope, $location){
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.error_message = '';

      // postService.getAll().success((data) => {
      //   $scope.posts = data;
      // });

      $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };


      $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };
});
