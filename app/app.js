var VisaApp = angular.module('VisaApp', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: 'app/views/first.html'
                        })
                        .when('/aloitus', {
                            controller: 'StartController',
                            templateUrl: 'app/views/aloitus.html'
                        })
                        .when('/kysymys', {
                            controller: 'QuestionController',
                            templateUrl: 'app/views/question.html'
                        })
                        .when('/finaali', {
                            controller: 'FinalController',
                            templateUrl: 'app/views/final.html'
                        });

            }]);
