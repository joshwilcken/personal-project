angular.module('app').controller('tradeCtrl', function($scope, tradeSvc){

    $scope.submitTrade = (trade) => {
        tradeSvc.submitTrade(trade).then(response => {
            console.log(response)
            alert(`You Purchased ${response.config.data.shares} shares of ${response.config.data.ticker}!`)
        })
    }
    $scope.submitSell = (trade) => {
        tradeSvc.submitSell(trade).then(response => {
            console.log(response)
        })
    }

})