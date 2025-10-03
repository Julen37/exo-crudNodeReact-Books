const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:8081', 
    ],
    optionsSuccessStatus: 200, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    headers: 'Content-Type,Authorization',
    credentials: true,
}
app.use(express.json());
app.use(cors(corsOptions));

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exocrudnodereactbooks'
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM books";
    database.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO books (`title`, `author`, `yearReleased`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.author,
        req.body.date
    ]
    database.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE books SET `title` = ?, `author`= ?, `yearReleased` = ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.author,
        req.body.date
    ]
    const id = req.params.id
    database.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/book/:id', (req, res) => {
    const sql = "DELETE FROM books WHERE id = ?";
    const id = req.params.id

    database.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log ('Server is running on port 8081 at http://localhost:8081')
})