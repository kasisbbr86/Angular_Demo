var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/home');

     $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
         // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        .state('about', {
            url: '/aboutUrl',
            views: {
                '': {
                    templateUrl: 'partial-about.html',
                },
                'columnOne@about': { //viewName@stateName
                    template: 'Look I am a Virtual column!' 
                },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
        })
        .state('aboutoverride', {
            url: '/aboutoverride',
            views: {
                '': {
                    templateUrl: 'partial-about.html',
                },
                'columnOne@aboutoverride': {
                    template: 'Look I am an Override column!' 
                },
                'columnTwo@aboutoverride': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
        });
});

routerApp.controller('scotchController', function($scope) {
    $scope.message = 'test';
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
});