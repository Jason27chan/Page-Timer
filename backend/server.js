var express = require('express');
var app = express();

let times;

app.get('/heartbeat', function(req, res) {
    res.send("express server online");
});

app.get('/api/times', function(req, res) {
    res.send(times);
});

app.post('/api/times', function(req, res) {
    times = req.body.times;
    console.log("successful")
    res.send(200);
});

app.listen(3001);