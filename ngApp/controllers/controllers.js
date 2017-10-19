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


    app.controller('authController', ['$scope', 'postService',
      ($scope, postService) => {
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.error_message = '';

      postService.getAll().success((data) => {
        $scope.posts = data;
      });

      $scope.login = () => {
        //placeholder until authentication is implemented
        $scope.error_message = 'login request for ' + $scope.user.username;
      };

      $scope.register = () => {
        //placeholder until authentication is implemented
        $scope.error_message = 'registeration request for ' + $scope.user.username;
      };
    }]);
