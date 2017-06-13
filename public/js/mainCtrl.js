angular.module('app').controller('mainCtrl', function($scope, mainSvc){
    $scope.getQuote = function(ticker){
        mainSvc.getQuote(ticker).then(function(resp){
            $scope.ticker = resp.data.query.results.quote
            console.log(resp)
        })
    }   
    
})