const express = require('express')
const app = express()
const PORT = 8888

app.listen(PORT, (err) => {
    if (err)
	console.log('An error has occurred')
    else
	console.log('Server started at port ' + PORT)
})
