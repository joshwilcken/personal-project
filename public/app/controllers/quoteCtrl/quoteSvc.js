angular.module('app').service('quoteSvc', function($http){
    this.getQuote = function(ticker){
        return $http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${ticker}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`)
    }

    this.realTimeData = function(ticker){
        return $http.get(`http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=FYYJEATQ6K0NLL40`)
    }

    this.chartData = function(ticker) {
        return $http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=FYYJEATQ6K0NLL40`)
    }
})

