// Define all the dependencies
const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// Some routing
app.get('/', function (req, res) {
  res.send('This is Home Page')
})

app.post('/register', function (req, res) {
	const usr = req.body.username
	const pwd = req.body.password
	console.log('username: ' + usr + ' and password: ' + pwd)
	res.status(200).json({ 
		username: usr,
		password: pwd,
		message: 'success' 
	})
})

app.put('/reset_password', function (req, res) {
	const usr = req.body.username
	const pwd = req.body.password
	console.log('Success Reset password: username: ' + usr + ' and password: ' + pwd)
	res.send('Success Reset password: username: ' + usr + ' and password: ' + pwd)
})

app.delete('/remove_id/:id', function (req, res) {
	const id = req.params.id
	console.log('Success remove id: ' + id)
	res.send('Success remove id: ' + id)
})



// Run the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})