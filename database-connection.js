const mongoose = require('mongoose');
//override mongoose's promise with the global one
mongoose.Promise = global.Promise;
// uri contains host and db name
mongoose.connect('mongodb://localhost/whiteboard', { useMongoClient: true });