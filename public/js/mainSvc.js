angular.module('app').service('mainSvc', function($http){
    this.getQuote = function(ticker){
        return $http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${ticker}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`)
    }
})