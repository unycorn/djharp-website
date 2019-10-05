const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/next', function (req, res) {
    res.sendFile(path.join(__dirname, 'next.html'));
});

app.get('/hoffman', function (req, res) {
    res.sendFile(path.join(__dirname, 'hoffman.html'));
});

app.use(express.static("public"));

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});
    
app.listen(80, function () {
    console.log('example app listening on port 80!')
});
