angular.module('app', ['ui.router', 'chart.js'])
       .config(function($stateProvider, $urlRouterProvider){
           

        $urlRouterProvider.when('', '/')


        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/views/home.html'
        })
        .state('quote', {
            url: '/quote',
            templateUrl: './app/views/quote.html',
            controller: 'quoteCtrl'
        })
        .state('groupCreator', {
            url: 'group',
            templateUrl: './app/views/groupCreator.html'
        })
        .state('trade', {
            url: '/trade',
            templateUrl: './app/views/trade.html',
            controller: 'tradeCtrl'
        })
        .state('buy', {
            url: '/buy',
            templateUrl: './app/views/buy.html',
            controller: 'tradeCtrl'
        })
        .state('sell', {
            url: '/sell',
            templateUrl: './app/views/sell.html',
            controller: 'tradeCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './app/views/profile.html',
            controller: 'profileCtrl'
        })
        .state('test', {
            url: '/test',
            templateUrl: './app/views/test.html',
            controller: 'homegraphCtrl'
        })


        
       })
