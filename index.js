const express = require('express');
const PersonServie = require('./services/person-service');
const bodyParser = require('body-parser');

// create a http application using express
const app = express();
// to interact with the http app, you need to listen to it on a port 1000 < port < 655K
app.listen(3000, () => {
    console.log('Server listening.'); // cb async function to execute after the main request is processed.
});

// tell express to use pug as view engine
// since it does not understand it natively
app.set('view engine', 'pug');

// using body parser to parse request data 
app.use(bodyParser.json());

// define  default route => homepage
app.get('/', (req, res, next) => {
    // res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/person/all', async(req, res, next) => {
    // using async await req handler to fetch all people
    const people = await PersonServie.findAll();
    // render a view with data
    res.render('person', {people});
});

app.post('/person', async (req, res, next) => {
    // take request data to add a new person
    console.log(req.body);
    const person = await PersonServie.add(req.body);
    res.send(person);
});

app.delete('/person/:personId', async (req, res, next) => {
    await PersonServie.del(req.params.personId);
    res.send('OK, deleted!');
});