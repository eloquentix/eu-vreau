angular.module('euvreau.controllers.topics', ['euvreau.services.firebase'])

.controller('TopicsController', function($scope, $rootScope, $state, $timeout,
  Firebase) {

  console.log("Instance !!!");

  $scope.topics = [];
  var topics = Firebase.Instance().ref('topics');

  //TODO we want this to be behind a service to abstract Firebase away
  topics.on('child_added', function(data) {
    console.log(data);
    $scope.topics.push({
      name: data.val().name,
      id: data.key
    });
    $timeout(function() {
      //$scope.apply();
    }, 0);
  });
  $scope.selectSubtopic = function(item) {
    console.log(item);
    $state.go('app.subtopics', {
      subtopicId: item.id
    });
  };

  console.log($scope.topics);

})

.controller('SubtopicsController', function($scope, $state, $rootScope,
  $timeout, $stateParams, Firebase) {
  $scope.subtopics = [];
  //TODO we want this to be behind a service to abstract Firebase away
  var topics = Firebase.Instance().ref('data/' + $stateParams.subtopicId);
  topics.on('child_added', function(data) {
    console.log(data);
    $scope.subtopics.push({
      what: data.val().what,
      where: data.val().where,
      how: getHowList(data.val())
    });
    $timeout(function() {
      //$scope.apply();
    }, 0);
  });

  $scope.subtopicDetails = function(item) {
    $rootScope.subtopic = item;
    $state.go('app.subtopic-details', {
      subtopicId: item.id
    });
  };

  $scope.addNew = function() {
    alert("Erm, create item");
  };

  function getHowList(item) {
    var lst = [];
    for (var key in item.how) {
      lst.push({
        name: item.how[key]
      });
    }
    return lst;
  }
})

.controller('SubtopicDetailsCtrl', function($scope, $rootScope, $timeout,
  $stateParams, Firebase) {
  //details for $stateParams.subtopicId
});
