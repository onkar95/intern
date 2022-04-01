const mongoose = require('mongodb').MongoClient
const express = require('express');
const app = express();

const cors = require('cors')
const rout = express.Router();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 5000

const mongoDB = "mongodb+srv://onkar:onkar@cluster0.qey1d.mongodb.net/sample?retryWrites=true&w=majority";

app.get('/showdata', (req, res) => {
    database.collection('sample').find({}).toArray((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            data.sort((b, a) => {
                return a.timestamp - b.timestamp;
            })
            res.status(200).send(data)
        }
    })

})

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

var database;
app.listen(PORT, () => {
    mongoose.connect(mongoDB,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (error, data) => {
            if (error) throw error
            database = data.db('blackcoffer-assign')
            console.log('connection build');
        })
})
