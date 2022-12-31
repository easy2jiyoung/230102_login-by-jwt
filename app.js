const { response } = require("express")
const express = require("express")

const app = express()

app.get('/users', (req, res) => {
    res.send('users page')
})

app.post('/login', (req, res) => {
    res.send('login page')
})

app.post('/logout', (req, res) => {
    res.send('logout page')
})

app.post('/register', (req, res) => {
    res.send('register page')
})

app.listen(3000, () => console.log(3000, "포트로 서버 열림"))