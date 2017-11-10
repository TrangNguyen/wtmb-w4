const BoardModel = require('../models/board-model');
const PersonModel = require('../models/person-model');

function findAll() {
    return BoardModel.find(); // find all records in board model
}

async function add(board) {
    const newBoard = await BoardModel.create(board);
    // add board to the author
    const author = await PersonModel.findOne({_id: newBoard.author});
    console.log('found author', author.name);
    author.boards.addToSet(newBoard);
    return newBoard;
}

function del(id) {
    return BoardModel.remove({ id });
}

function find(id) {
    // first record that matches
    return BoardModel.findOne({id}).populate('author').populate('notes');
}

async function addNote(id, note) {
    console.log('add Note?', id, note)
    const board = await BoardModel.findOne({id});
    board.notes.addToSet(note);
    const updatedBoard = await board.save();
    return updatedBoard;
}

async function addCollaborator(id, collaboratorId) {
    const board = await BoardModel.findOne({id});
    // if requested person is not the board's author.
    if (board.author.id != collaboratorId ) {
        const collaborator = await PersonModel.findOne({id: collaboratorId});
        board.collaborators.addToSet(collaborator);
        const updatedBoard = await board.save();
        return updatedBoard;
    }
    console.log('This person owns this board!');
    
}

module.exports = {
    findAll,
    find,
    add,
    addNote,
    addCollaborator,
    del
};
