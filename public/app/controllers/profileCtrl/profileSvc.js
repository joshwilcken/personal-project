angular.module('app').service('profileSvc', function($http){
    this.getData = () => {
        return $http({
            url: '/api/profile',
            method: 'GET'
        })
    }

})