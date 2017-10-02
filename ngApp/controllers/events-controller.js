// angular.module("meetupsApp", [])
// .controller("meetupsController", ($scope)
app.controller('meetupsController', ['$scope', '$resource',
($scope, $resource) =>{
  let Event = $resource('/api/meetups');
  // $scope.meetupsGreeting = "Hello from controller";
  // $scope.meetups = [
  //   {name:"Meetup 1"},
  //   {name:"Meetup 2"},
  //   {name:"Meetup 3"}
  // ];

  Event.query((results)=>{
    $scope.meetups = results;
  });

  $scope.addMeetup = () =>{
    let meetup = new Event();
    meetup.name = $scope.meetupName;
    meetup.$save((result)=>{
      $scope.event.push(result);
      $scope.eventname = '';
    });
    // $scope.meetups.push({name:$scope.meetupName});
    // $scope.meetupName = '';
  }
}]);
