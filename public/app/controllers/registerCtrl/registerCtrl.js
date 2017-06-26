angular.module('app').controller('registerCtrl', function($scope, registerSvc){
    $scope.register = (user) => {
        registerSvc.registerUser(user).then(res => {
            console.log(res)
        })
    }
})