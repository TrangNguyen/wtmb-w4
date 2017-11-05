const fs = require('fs');
const BoardModel = require('../models/board-model');
const dbPath = `${__dirname}/../db/board.json`;

function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if(err) return reject(err);
            const boards = JSON.parse(data).map(BoardModel.create);
            resolve(boards);
        })
    });
}

function saveAll(boards) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(boards), (err, file) => {
            if(err) return reject(err);
            resolve();
        })
    })
}

async function add(board) {
    const boards = await findAll();
    const lastBoard = boards[boards.length -1];
    const lastBoardId = lastBoard && lastBoard.id || 0;
    board.id = lastBoardId + 1;
    const newBoard = BoardModel.create(board);
    boards.push(newBoard);
    await saveAll(boards);
    return newBoard;
}

async function findById(boardId) {
    const boards = await findAll();
    return boards.find(b => b.id == boardId);
}

async function findByAuthor(authorId) {
    const boards = await findAll();
    return boards.filter(b => b.author.id == authorId);
}

module.exports = {
    findAll,
    findByAuthor,
    findById,
    add
}