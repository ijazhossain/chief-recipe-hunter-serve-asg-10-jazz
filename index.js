const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
const data = require('./data.json')

app.get('/', (req, res) => {
    res.send('Chef recipe hunter server is running')
})
app.get('/home', (req, res) => {
    res.send(data)
})
app.listen(port, () => {
    console.log('Chef recipe hunter is listening on port', port);
})