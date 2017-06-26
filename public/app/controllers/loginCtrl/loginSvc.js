angular.module('app').service('loginSvc', function($http){
    this.loginUser = (credential) => {
        return $http({
            url: '/api/login',
            method: 'POST',
            data: credential
        })
    }
    this.quote = 'hello from inside the computer'
})