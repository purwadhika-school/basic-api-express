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
	res.send('username: ' + usr + ' and password: ' + pwd)
})






// Run the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})