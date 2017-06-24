angular.module('app').directive('chartDir', function(){
    return {
        restrict: 'E',
        templateUrl: './app/controllers/chartCtrl/chartDir.html',
        scope: {
            ticker: '=ticker'
        },
        controller: 'chartCtrl'
    }
})