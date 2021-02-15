const express = require('express');

const staticPath =__dirname;

const app = express();

app.get('/', function(req, res) {
    res.send(index.html)

});

app.get('NarutoFanPage', function(req, res)) {

});
app.use(express.static(staticPath));


app.listen(2000);