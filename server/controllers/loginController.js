exports.loginPerson = (req, res, next) => {
    const { email, password } = req.body
    req.app.get('db').loginUser([email, password]).then(response => {
        console.log(response)
        if(response.length > 0) {
			res.status(200).send(response)
		} else {
			res.status(404).send('User Not Found')
		}
    })
}



// app.post('/api/login-user', (req, res, next) =>{
// 	const { email, password } = req.body;
// 	req.app.get('db').loginUser([email, password]).then(response => {
// 		//delete response.password;
// 		console.log(response)
// 		if(response.length > 0) {
// 			res.status(200).send(response)
// 		} else {
// 			res.status(404).send('User Not Found')
// 		}
// 	});
// })