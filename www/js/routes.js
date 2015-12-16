blogSample.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
      when('/survey', {
        templateUrl: 'views/add-survey.html',
        controller: 'mainController'
      }).
      when('/newsurvey', {
        templateUrl: 'views/new-survey.html',
        controller: 'mainController'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'mainController'
      }).
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/about', {
          templateUrl: 'views/about.html',
          controller: 'mainController'
      }).
      otherwise({
          redirectTo: '/login'
      });
  }]);