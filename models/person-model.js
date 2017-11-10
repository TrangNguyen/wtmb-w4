// require mongoose to work with mongodb
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// declare a schema - blue print
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    // job title
    title: {
        type: String,
        minlength: 3
    },
    boards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    }],
    // note this user creates
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

// using mongose-sequence to auto increment the id field.
PersonSchema.plugin(AutoIncrement, { id:'personSchemaInternalCounter', inc_field: 'id' });

// create/export a mongoose model with name and its schema.
module.exports = mongoose.model('Person', PersonSchema); 
