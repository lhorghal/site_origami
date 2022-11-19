const { app } = require("express");
const users = require('./users.json')

app.get('users', (req,res) => {res.status(200).json(users)})

app.put('/users')