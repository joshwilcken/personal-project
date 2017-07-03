angular.module('app').controller('profileCtrl', function ($scope, profileSvc) {
            profileSvc.getData().then((resp) => {
                $scope.currentData = resp.data
            })

            profileSvc.getTotals().then((resp)=> {
                $scope.totalsData = resp.data
                console.log($scope.totalsData)
            })
})