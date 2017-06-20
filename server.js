const express = require('express')
const app = express()
const PORT = 8888

app.set('view engine', 'gulp')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.end('URL requested: ' + req.url)
})

app.get('/login/', (req, res) => {
    res.render('login.pug')
})

app.get('/logout/', (req, res) => {
    res.render('logout.pug')
})

app.listen(PORT, (err) => {
    if (err)
	console.log('An error has occurred')
    else
	console.log('Server started at port ' + PORT)
})
