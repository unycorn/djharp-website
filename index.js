const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile("/home/ubuntu/djharp/index.html");
});

app.get('/next', function (req, res) {
    res.sendFile("/home/ubuntu/djharp/next.html");
});

app.use(express.static("public"));

app.use(function(req, res, next) {
    res.status(404).sendFile("/home/ubuntu/djharp/404.html");
});
    
app.listen(80, function () {
    console.log('example app listening on port 80!')
});
