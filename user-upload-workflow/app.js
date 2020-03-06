require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const bodyParser = require('body-parser')
// const path = require('path')

const app = express()

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.get('/', function(req, res) {
  res.send('hello world')
})

app.post('/api/update', function (req, res) {
  var name = req.body.name
  var shoesize = req.body.shoesize

  res.send(`${name} ${shoesize}`)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

// module.exports = app
var port = process.env.PORT || 3000

app.listen(port, () => console.info(`Server is up on http://localhost:${port}`))
// curl -d 'name=admin&shoesize=12' http://localhost:3000/api/update
