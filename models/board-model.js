// require mongoose to work with mongodb
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// declare a schema - blue print
const BoardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    }, // type of the value for this field
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }],
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
});
// using mongose-sequence to auto increment the id field.
BoardSchema.plugin(AutoIncrement, { id:'boardSchemaInternalCounter', inc_field: 'id' });

// create/export a mongoose model with name and its schema.
module.exports = mongoose.model('Board', BoardSchema); 
