const path = require('path');
const express = require('express');
const app = express();

const port = 1314;

app.use(express.static(path.resolve(__dirname,'public')));

app.listen(port, function(){
    console.log('run on port: ' + port);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'./src/views/home.html'));
})

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname,'./src/views/register.html'));
})
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname,'./src/views/login.html'));
})