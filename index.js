const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;




const catagories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Course API is  WOrking');
});

app.get('/course-categories', (req, res) => {
    res.send(catagories);
});

app.get("/all-courses", (req, res) => {
  res.send(courses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_courses = courses.filter(
    (course) => course.category_id === id
  );
  // console.log(category_courses);
  res.send(category_courses);
});


app.listen(port, () => {
    console.log('Bohubrihi is working');
})