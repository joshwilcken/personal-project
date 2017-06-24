angular.module('app').service('tradeSvc', function($http){
    this.submitTrade = (trade)=> {
        console.log(trade)
        return $http ({
            url: '/api/trade',
            method: 'POST',
            data: trade
        })
    }
})