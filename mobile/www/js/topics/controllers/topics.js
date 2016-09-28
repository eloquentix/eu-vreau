angular.module('euvreau.controllers.topics', ['euvreau.services.firebase'])

.controller('TopicsController', function($scope, $rootScope, $state, $timeout,
  Firebase) {

  $scope.topics = [];
  var topics = Firebase.Instance().ref('topics');

  //TODO we want this to be behind a service to abstract Firebase away
  topics.on('child_added', function(data) {
    console.log(data.val());
    $scope.topics.push({
      name: data.val().name,
      id: data.key
    });
    $timeout(function() {
      //$scope.apply();
    }, 0);
  });
  $scope.selectTopic = function(item) {
    console.log(item);
    $rootScope.currentTopic = item;
    $state.go('app.subtopics', {
      subtopicId: item.id
    });
  };

})

.controller('SubtopicsController', function($scope, $state, $rootScope,
  $timeout, $stateParams, Firebase) {
  $scope.subtopics = [];
  //TODO we want this to be behind a service to abstract Firebase away
  var topics = Firebase.Instance().ref('data/' + $stateParams.subtopicId);
  topics.on('child_added', function(data) {
    console.log(data.val());
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
    $rootScope.currentSubtopic = item;
    $state.go('app.subtopic-details', {
      subtopicId: item.id
    });
  };

  $scope.addNew = function() {
    $state.go('app.subtopic-new');
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

.controller('AddNewSubtopicController', function($scope, $rootScope, $timeout,
  $stateParams, Firebase) {
  $scope.newSubtopic = {
    name: "",
    where: "",
    how: ["fifi"]
  };

  $scope.addNewStep = function() {
    console.log("New step");
    $scope.newSubtopic.how.push("");
    $timeout(function(){
      $scope.$apply();
    }, 10);
  };
})

.controller('SubtopicDetailsController', function($scope, $rootScope, $timeout,
  $stateParams, Firebase) {
  //details for $stateParams.subtopicId
});
