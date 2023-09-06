const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 1314;

app.listen(port, function(){
    console.log('run on port: ' + port);
});

app.use(express.static(path.resolve(__dirname,'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'./src/views/home.html'));
})

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname,'./src/views/register.html'));
})
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname,'./src/views/login.html'));
})