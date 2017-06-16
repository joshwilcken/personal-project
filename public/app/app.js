angular.module('app', ['ui.router'])
       .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', '/')


        $stateProvider
        .state('quote', {
            url: '/quote',
            templateUrl: './app/views/quote.html',
            controller: 'quoteCtrl'
        })
        .state('groupCreator', {
            url: 'group',
            templateUrl: './app/views/groupCreator.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: './app/views/login.html'
        })


       })
