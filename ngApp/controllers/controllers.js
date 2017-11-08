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
          event.location = $scope.eventLocation;
          event.time = $scope.eventTime;
          event.$save((result) => {
            $scope.events.push(result);
            $scope.eventname = '';
            $scope.eventlocation = '';
            $scope.eventtime = '';

      });
      // $scope.DeleteEvent = function (event) {
      //          var _index = $scope.Event.indexOf(event);
      //          $scope.Event.splice(_index, 1);
      //      }
      //

        }}]);
        
