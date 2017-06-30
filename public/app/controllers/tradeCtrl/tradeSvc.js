angular.module('app').service('tradeSvc', function($http){
    this.submitTrade = (trade)=> {
        console.log(trade)
        return $http ({
            url: '/api/buy',
            method: 'POST',
            data: trade
        })
    }
    this.submitSell = (trade) => {
        console.log(trade)
        return $http ({
            url: '/api/sell',
            method: 'POST',
            data: trade
        })
    }
})