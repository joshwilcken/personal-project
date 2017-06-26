angular.module('app').controller('loginCtrl', function($scope, loginSvc, $state){
    $scope.login = (credential) => {
        loginSvc.loginUser(credential).then(res => {
            console.log(res)
            if(res.data.length > 0) {
                $state.go('profile')
            }
            else {
                alert("Incorrect username or password")
            }
        })
    }
    $scope.quote = loginSvc.quote
})




	// $scope.login = (user) => {
	// 	authService.loginUser(user).then(res => {
	// 		if(res.data.length > 0) {
	// 			$state.go('home')
	// 		} else {
	// 			alert('Too Bad')
	// 		}
	// 	})
	// }