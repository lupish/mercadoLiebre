const express = require('express')
const app = express()

app.use(express.static('public')); // indica donde estan los archivos estaticos de nuestro proyecto

app.listen(3030, () => console.log("Server running in 3030"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
