// require mongoose to work with mongodb
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// declare a schema - blue print
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    }, // type of the value for this field
    age: {
        type: Number,
        default: 0
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
});

// using mongose-sequence to auto increment the id field.
PersonSchema.plugin(AutoIncrement, { inc_field: 'id' });

// create/export a mongoose model with name and its schema.
module.exports = mongoose.model('Person', PersonSchema); 
