angular.module('euvreau.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.topics', {
    url: '/topics',
    views: {
      'menuContent': {
        templateUrl: 'templates/topics.html',
        controller: 'TopicsController'
      }
    }
  })

  .state('app.subtopics', {
    url: '/subtopics/:subtopicId',
    views: {
      'menuContent': {
        templateUrl: 'templates/subtopics.html',
        controller: 'SubtopicsController'
      }
    }
  })

  .state('app.subtopic-details', {
    url: '/subtopics/:subtopicId/details',
    views: {
      'menuContent': {
        templateUrl: 'templates/subtopic-details.html',
        controller: 'SubtopicDetailsController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/topics');
});
