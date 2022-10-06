const PORT = 3002;
const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgresql://postgres:docker@localhost:5432/popsingers'
const client = new Client({
    connectionString: connectionString
})

var cors = require('cors')


const app = express();
client.connect();


app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("wuddup")
})

app.get('/singers', (req, res) => {
    client.query('SELECT * FROM singers')
        .then(result => {
            res.send(result.rows)
        })
})


app.listen(PORT, () => {
    console.log(`Our app is running on ${PORT}`)
});