const NoteModel = require('../models/note-model');
// service is needed when we do more business logic than the db model provide.
function findAll() {
    return NoteModel.find(); // find all records in note model
}

function add(Note) {
    return NoteModel.create(Note);
}

function del(id) {
    return NoteModel.remove({ id });
}

function find(id) {
    // first record that matches
    return NoteModel.findOne({id}).populate('author');
}

module.exports = {
    findAll,
    find,
    add,
    del
};