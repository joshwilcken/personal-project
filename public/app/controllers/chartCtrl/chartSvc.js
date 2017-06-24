angular.module('app').service('chartSvc', function($http){    
    this.chartData = function(ticker) {
        return $http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=FYYJEATQ6K0NLL40`)
    }

})