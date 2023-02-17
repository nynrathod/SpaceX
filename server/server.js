const express = require('express')
const getConnection = require('./dbconnect');

const app = express()
const port = 3000
var cors = require('cors')

getConnection();
app.use(cors());
app.use(express.json())

// Available Routes
app.use('/api/form', require('./routes/form'))

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})