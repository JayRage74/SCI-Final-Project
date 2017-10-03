// angular.module("meetupsApp", [])
// .controller("meetupsController", ($scope)
app.controller('eventsController', ['$scope', '$resource',
($scope, $resource) =>{
  let Event = $resource('/api/events');
  // $scope.meetupsGreeting = "Hello from controller";
  // $scope.meetups = [
  //   {name:"Meetup 1"},
  //   {name:"Meetup 2"},
  //   {name:"Meetup 3"}
  // ];

  Event.query((results)=>{
    $scope.meetups = results;
  });

  $scope.addEvents = () =>{
    let event = new Event();
    event.name = $scope.eventName;
  event.$save((result)=>{
      $scope.event.push(result);
      $scope.eventname = '';
    });
    // $scope.meetups.push({name:$scope.meetupName});
    // $scope.meetupName = '';
  }
}]);
