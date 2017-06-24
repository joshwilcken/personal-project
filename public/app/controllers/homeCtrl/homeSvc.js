angular.module('app').service('homeSvc', function($http){
    this.loginUser = (user) => {
        return $http({
            url: '/home',
            method: 'Post',
            data: user
        })
    }
})