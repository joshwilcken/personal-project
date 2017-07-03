angular.module('app').service('homegraphSvc', function($http){
    this.spyData = () => {
        return $http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=spy&apikey=FYYJEATQ6K0NLL40`)
    }
})