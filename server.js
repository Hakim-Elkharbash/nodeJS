const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});