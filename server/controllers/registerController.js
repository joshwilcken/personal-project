exports.registerNewUser = (req, res, next) => {
    const { first_name, last_name, email, password } = req.body
    req.app.get('db').createUser(person).then(response => {
        console.log(res)
        if(response.data.length > 0) {
			$state.go('profile')
		} else {
			alert('Incorrect username or password')
		}
    })
}