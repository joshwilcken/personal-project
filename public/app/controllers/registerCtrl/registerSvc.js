angular.module('app').service('registerSvc', function($http){
    this.registerUser = (user) => {
        return $http({
            url: '/api/create-user',
            method: 'POST',
            data: user
        })
    }
})