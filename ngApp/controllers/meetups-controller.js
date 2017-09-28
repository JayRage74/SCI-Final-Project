// angular.module("meetupsApp", [])
// .controller("meetupsController", ($scope)
app.controller('meetupsController', ['$scope', '$resource',
($scope, $resource) =>{
  let Meetup = $resource('/api/meetups');
  // $scope.meetupsGreeting = "Hello from controller";
  // $scope.meetups = [
  //   {name:"Meetup 1"},
  //   {name:"Meetup 2"},
  //   {name:"Meetup 3"}
  // ];

  Meetup.query((results)=>{
    $scope.meetups = results;
  });
  
  $scope.addMeetup = () =>{
    let meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save((result)=>{
      $scope.meetups.push(result);
      $scope.meetupname = '';
    });
    // $scope.meetups.push({name:$scope.meetupName});
    // $scope.meetupName = '';
  }
}]);
