const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'pug');

const users = require('./routes/user-route');
const boards = require('./routes/board-route');

app.use('/users', users);
app.user('/boards', boards);

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});