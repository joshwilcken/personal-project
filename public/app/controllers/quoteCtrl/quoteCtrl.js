angular.module('app').controller('quoteCtrl', function($scope, quoteSvc){

    $scope.getQuote = function(ticker){
        quoteSvc.getQuote(ticker).then(function(resp){
            $scope.tickerData = resp.data.query.results.quote
            $scope.ticker = '';
        })
    }   

})