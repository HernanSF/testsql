// Conectarse a una base de datos no Mysql

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "myapp",
  password: "password",
  port: 5432
});

client.connect().catch(err => console.log(err));

// createTable(client);

// crear un student

const insertStudent = function(student) {
  return new Promise((resolve, reject) => {
    const text =
      "INSERT INTO Student(dni, firstName, lastName, age) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [
      student.dni,
      student.firstName,
      student.lastName,
      student.age
    ];
    // callback
    client.query(text, values, (err, res) => {
      if (err) {
        reject(err.stack);
      } else {
        resolve(res.rows[0]);
      }
    //   client.end();
    });
  });
};

const readStudent = function() {
  return new Promise((resolve, reject) => {
    const text = "SELECT S.dni, S.firstname, I.name FROM student S INNER JOIN institute I ON S.institute_id=I.id_key";
    // callback
    client.query(text, (err, res) => {
    //   client.end();
      if (err) {
        reject(err.stack);
      } else {        
        resolve(res.rows);
      }
    });
  });
};

module.exports = {
  readStudent: readStudent,
  insertStudent: insertStudent
};
