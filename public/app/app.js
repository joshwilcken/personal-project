angular.module('app', ['ui.router', 'chart.js'])
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
        .state('home', {
            url: '/home',
            templateUrl: './app/views/home.html'
        })
        .state('trade', {
            url: '/trade',
            templateUrl: './app/views/trade.html',
            controller: 'tradeCtrl'
        })

        
       })
