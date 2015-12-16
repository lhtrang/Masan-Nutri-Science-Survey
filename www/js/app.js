var surveyApp = angular.module('SurveyApp', ['ui.router', 'LocalStorageModule']);

surveyApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise("login");

        $stateProvider
            .state('tabs', {
                url: '/tabs',
                templateUrl: '/views/tabs.html'
            })
            .state('tabs.survey', {
                url: "/survey",
                templateUrl: "/views/add-survey.html"
            })

            .state('tabs.newsurvey', {
                url: "/newsurvey",
                templateUrl: "/views/new-survey.html",
                controller: 'SurveyController'
            })

            .state('tabs.sales-heo', {
                url: "/sales-heo",
                cache: true,
                        templateUrl: "views/add-survey-sales-heo.html",
                        controller: 'SurveyController'
            })
            .state('tabs.sales-ga', {
                url: "/sales-ga",
                cache: true,
                        templateUrl: "views/add-survey-sales-ga.html",
                        controller: 'SurveyController'
            })
            .state('tabs.sales-vit', {
                url: "/sales-vit",
                cache: true,
                        templateUrl: "views/add-survey-sales-vit.html",
                        controller: 'SurveyController'
            })
            .state('tabs.sales-bo', {
                cache: true,
                url: "/sales-bo",
                        templateUrl: "views/add-survey-sales-bo.html",
                        controller: 'SurveyController'
            })
            .state('tabs.sales-giacam', {
                url: "/sales-giacam",
                        templateUrl: "views/add-survey-sales-giacam.html",
                        controller: 'SurveyController'
            })

            .state('login', {
                url: '/login',
                templateUrl: '/views/login.html',
                controller: 'LoginController'
            })

            // LIST DEALER
            .state('tabs.dealers', {
                url: "/dealers",
                cache: false,
                templateUrl: "views/list-dealer.html",
                controller: 'DealerController'
            })
            // EDIT DEALER
            .state('tabs.dealer-detail', {
                url: '/dealers/:SurveyId',
                cache: false,
                templateUrl: 'views/dealer-detail.html',
                controller: 'DealerController'
            })

            .state('tabs.dealer-detail-sales-heo', {
                url: '/dealer-detail-sales-heo',
                cache: false,
                        templateUrl: 'views/dealer-detail-sales-heo.html',
                        controller: 'UpdateHeoController'

            })

            .state('tabs.dealer-detail-sales-ga', {
                url: '/dealer-detail-sales-ga',
                cache: false,
                        templateUrl: 'views/dealer-detail-sales-ga.html',
                        controller: 'UpdateGaController'

            })

            .state('tabs.dealer-detail-sales-vit', {
                url: '/dealer-detail-sales-vit',
                cache: false,
                        templateUrl: 'views/dealer-detail-sales-vit.html',
                        controller: 'UpdateVitController'

            })

            .state('tabs.dealer-detail-sales-bo', {
                url: '/dealer-detail-sales-bo',
                cache: false,
                        templateUrl: 'views/dealer-detail-sales-bo.html',
                        controller: 'UpdateBoController'
            })

            .state('tabs.dealer-detail-sales-giacam', {
                url: '/dealer-detail-sales-giacam',
                cache: false,
                        templateUrl: 'views/dealer-detail-sales-giacam.html',
                        controller: 'UpdateGiacamController'
            })
            // ACCOUNT
            .state('tabs.account', {
                url: "/account",
                cache: false,
                templateUrl: "views/account.html",
                controller: 'AccountController'
            });
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
 }]);

//var serviceBase = 'http://127.0.0.1:3000/';
//app.constant('ngAuthSettings', {
//    apiServiceBaseUri: serviceBase,
//    clientId: 'ngAuthApp'
//});

//surveyApp.config(function ($httpProvider) {
//    //disable IE ajax request caching
//    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
//    // extra
//    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
//    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
//});

//app.run(['authService', function (authService) {
//    authService.fillAuthData();
//}]);