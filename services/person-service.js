const PersonModel = require('../models/person-model');
// service is needed when we do more business logic than the db model provide.
function findAll() {
    return PersonModel.find(); // find all records in person model
}

function add(person) {
    return PersonModel.create(person);
}

function del(id) {
    return PersonModel.remove({ id });
}

function find(id) {
    // first record that matches
    return PersonModel.findOne({id}).populate('friends');
}

module.exports = {
    findAll,
    find,
    add,
    del
};
