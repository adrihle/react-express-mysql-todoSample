const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_USER_QUERY = 'SELECT * FROM tasks'

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
})

app.use(cors());

app.get('/', (req, res) => {
    res.send('/tasks para ver los todos')
})

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USER_QUERY, (err, resultados) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: resultados
            })
        }
    })
})

app.get('/users/add', (req, res) => {
    const { task, status } = req.query
    const INSERT_USER_QUERY = `INSERT INTO tasks(task,status) VALUES('${task}','${status}')`
    connection.query(INSERT_USER_QUERY, (err, resultados) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('tarea guardada')
        }
    })
})

app.listen(4000, () => {
    console.log('====================================');
    console.log('servidor corriendo en puerto 4000');
    console.log('====================================');
})