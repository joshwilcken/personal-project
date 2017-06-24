angular.module('app').controller('quoteCtrl', function ($scope, $interval, quoteSvc) {

    // detailed quote API call
    $scope.getQuote = (ticker) => {
        quoteSvc.getQuote(ticker).then((resp) => {
            $scope.tickerData = resp.data.query.results.quote
            $scope.chartTicker = $scope.ticker 
            $scope.ticker = '';
            $scope.showMe = true;
        })

    }
    // // Real time quote API call
    $scope.realTimeData = (ticker) => {
        quoteSvc.realTimeData(ticker).then((resp) => {
            $scope.liveData = resp.data["Realtime Global Securities Quote"];
            $scope.showMe = true;
        })

    }

    // // Checks to see if the client presses the 'Enter' key
    $scope.checkEvent = (e, ticker) => {
        if (e.keyCode === 13) {
            $scope.showMe = true;
            $scope.realTimeData(ticker);
            $scope.getQuote(ticker);
        }
    }
    // Updates the quote every 60 seconds
    // $interval(() => {
    //     $scope.realTimeData(ticker)

    // }, 60000)
})