const PORT = 3002;
const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:postgrespw@localhost:55002/popsingers'
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


app.post('/singers', (req, res) => {
    const { singer_name } = req.body;
    client.query('INSERT INTO singers (singer_name) VALUES ($1)', [singer_name],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send('Singer Added')
        })
})


app.listen(PORT, () => {
    console.log(`Our app is running on ${PORT}`)
});