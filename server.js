const { readStudent, insertStudent } = require("./lib/data");
var bodyParser = require('body-parser')
const express = require("express");

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.get("/", (req, res) => {
  readStudent()
    .then(data => res.send(data))
    .catch(err => {
      console.log(err)
      res.send(err)
    });
});

app.post("/", (req, res) => {
    console.log('deberia', req.body);
  const student = {
    dni: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  };

  insertStudent(student)
    .then(data => res.sendStatus(200))
    .catch(err => {
      console.log(err)
      res.send(err)
    });
});

app.listen(3001, () => console.log(`Example app listening on port ${3001}!`));
