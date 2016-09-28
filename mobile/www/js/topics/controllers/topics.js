angular.module('euvreau.controllers.topics', ['euvreau.services.firebase'])

.controller('TopicsController', function($scope, $rootScope, $state, $timeout,
  Firebase) {

  $scope.topics = [];
  var topics = Firebase.Instance().ref('topics');

  //TODO we want this to be behind a service to abstract Firebase away
  topics.on('child_added', function(data) {
    // console.log(data.val());
    $scope.topics.push({
      name: data.val().name,
      id: data.key
    });
    $timeout(function() {
      //$scope.$apply();
    }, 0);
  });
  $scope.selectTopic = function(item) {
    $rootScope.currentTopic = item;
    $state.go('app.subtopics');
  };

})

.controller('SubtopicsController', function($scope, $state, $rootScope,
  $timeout, $stateParams, Firebase) {
  var topicId = $rootScope.currentTopic.id;
  $scope.subtopics = [];
  //TODO we want this to be behind a service to abstract Firebase away
  var subtopics = Firebase.Instance().ref('subtopics/' + topicId);
  subtopics.on('child_added', function(data) {
    console.log(data.val());
    $scope.subtopics.push({
      what: data.val().name,
      id: data.key
    });
    $timeout(function() {
      //$scope.$apply();
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

})

.controller('AddNewSubtopicController', function($scope, $rootScope, $timeout,
  $stateParams, Firebase) {

  $scope.forceDisabled = false;
  var stepsCounter = 0;
  $scope.newSubtopic = {
    name: "",
    where: "",
    how: [{
      key: stepsCounter,
      name: ""
    }]
  };

  $scope.saveDisabled = function() {
    if(!$scope.newSubtopic.name || $scope.newSubtopic.name.trim() === "") {
      return true;
    }
    if(!$scope.newSubtopic.where || $scope.newSubtopic.where.trim() === "") {
      return true;
    }
    if(!$scope.newSubtopic.how || $scope.newSubtopic.how.length === 0) {
      return true;
    }
    if($scope.newSubtopic.how.length > 0) {
      if(!$scope.newSubtopic.how[0].name || $scope.newSubtopic.how[0].name.trim() === "") {
        return true;
      }
    }
    return $scope.forceDisabled;
  };

  $scope.addNewStep = function() {
    if ($scope.newSubtopic.how[$scope.newSubtopic.how.length - 1].name.trim() !== "") {
      stepsCounter += 100;
      $scope.newSubtopic.how.push({
        key: stepsCounter,
        name: ""
      });
    }
  };

  $scope.saveNewSubtopic = function() {

    $scope.forceDisabled = true;
    $timeout(function() {
      $scope.$apply();
    }, 0);


    var topicId = $rootScope.currentTopic.id;
    var subTopicsRef = Firebase.Instance().ref('subtopics/' + topicId);
    var key = subTopicsRef.push().key;
    var updates = {};
    updates['subtopics/' + topicId + '/' + key] = {
      name: $scope.newSubtopic.name
    };
    updates['details/' + topicId + '/' + key] = {
      name: $scope.newSubtopic.name,
      where: $scope.newSubtopic.where,
      how: buildHowObject($scope.newSubtopic.how)
    };
    Firebase.Instance().ref().update(updates).then(function(result) {
      console.log("Updated successfully");
      //console.log(result);
    });
  };

  function buildHowObject(lst) {
    console.log(lst);
    var res = {};
    for (var i = 0; i < lst.length; i++) {
      var current = lst[i];
      res[current.key] = current.name;
    }
    return res;
  }

})

.controller('SubtopicDetailsController', function($scope, $rootScope, $timeout,
  $stateParams, Firebase) {
  var topicId = $scope.currentTopic.id;
  var subtopicId = $scope.currentSubtopic.id;
  var details = Firebase.Instance().ref('details/' + topicId + "/" + subtopicId);
  details.once('value').then(
    function(data) {
      $scope.subtopicDetails = data.val();
      $timeout(function() {
        //$scope.$apply();
      }, 0);
    });
});
