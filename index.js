const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const catagories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Course API is  WOrking');
});

app.get('/course-categories', (req, res) => {
    res.send(catagories);
});




app.listen(port, () => {
    console.log('Bohubrihi is working');
})