angular.module('app').service('profileSvc', function($http){
    this.getData = (user) => {
        return $http({
            url: '/api/profile',
            method: 'GET',
            data: user
        })
    }
})