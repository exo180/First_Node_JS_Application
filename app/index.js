// app/index.js

/*const calc = require('./calc')
//const sync_read_file = require('./sync_read_file')
const async_read_file = require('./async_read_file')
const numbersToAdd = [3,4,10,2]

const result = calc.sum(numbersToAdd)

console.log(`The result is: ${result}`)
*/

/*const http = require('http')
const port = 3000

const requestHandler = (request,response) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if(err){
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})*/

/* const express = require('express')
const app = express()
const port = 3000

app.get('/',(request,response) => {
	response.send('Hello from express')
})

app.listen(port, (err) => {
	if(err){
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
}) */
const express = require('express')
const app = express()

app.use((request,response,next) => {
	console.log(request.headers)
	next()
})

app.use((request,response,next) => {
	request.chance = Math.random()
	next()
})

app.get('/', (request,response) => {
	response.json({
		chance: request.chance
	})
})

app.use((err,request,response,next) => {
	console.log(err)
response.status(500).send('something broke')
})

app.listen(3000)



















