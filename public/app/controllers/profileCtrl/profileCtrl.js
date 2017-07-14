angular.module('app').controller('profileCtrl', function ($scope, profileSvc) {


            profileSvc.getData().then((resp) => {
                $scope.currentData = resp.data
                $scope.count += 1
                if($scope.count === 2){
                    $scope.dataLoad = !$scope.dataLoad
                    $scope.dataLoader = !$scope.dataLoader
                }
            })

            profileSvc.getTotals().then((resp)=> {
                $scope.totalsData = resp.data
                $scope.count += 1
                if($scope.count === 2){
                    $scope.dataLoad = !$scope.dataLoad
                    $scope.dataLoader = !$scope.dataLoader
                }
            })

            $scope.count = 0
            console.log($scope.count)
            $scope.dataLoad = false;
            $scope.dataLoader = true;
})