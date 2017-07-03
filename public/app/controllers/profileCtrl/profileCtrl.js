angular.module('app').controller('profileCtrl', function ($scope, profileSvc) {
            profileSvc.getData().then((resp) => {
                $scope.currentData = resp.data
            })
})