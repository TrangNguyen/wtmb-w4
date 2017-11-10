// require mongoose to work with mongodb
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
// declare a schema - blue print
const NoteSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
        minlength: 3
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    stars: {
        type: Number,
        default: 0
    }
});
// using mongose-sequence to auto increment the id field.
NoteSchema.plugin(AutoIncrement, { id:'noteSchemaInternalCounter', inc_field: 'id' });
// create/export a mongoose model with name and its schema.
module.exports = mongoose.model('Note', NoteSchema); 
