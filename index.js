const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// connect to database
require('./database-connection');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'pug');

const person = require('./routes/person');
const board = require('./routes/board');
const note = require('./routes/note');

app.use('/person', person);
app.use('/board', board);
// note does not have its own route but is a subroute of board
app.use('/board/:id/note', note);

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
