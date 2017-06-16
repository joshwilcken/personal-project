'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('quote', {
        url: '/quote',
        templateUrl: './app/views/quote.html',
        controller: 'quoteCtrl'
    }).state('groupCreator', {
        url: 'group',
        templateUrl: './app/views/groupCreator.html'
    }).state('login', {
        url: '/login',
        templateUrl: './app/views/login.html'
    });
});
'use strict';

angular.module('app').controller('quoteCtrl', function ($scope, quoteSvc) {

    $scope.getQuote = function (ticker) {
        quoteSvc.getQuote(ticker).then(function (resp) {
            $scope.tickerData = resp.data.query.results.quote;
            $scope.ticker = '';
        });
    };
});
'use strict';

angular.module('app').service('quoteSvc', function ($http) {
    this.getQuote = function (ticker) {
        return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + ticker + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
    };
});