angular.module('app').controller('homeCtrl', function($scope, homeSvc){
    $scope.login = (user) => {
        chartSvc.loginUser(user).then(resp =>{
            state.go('/home')
        })
    }
})