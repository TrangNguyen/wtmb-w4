const fs = require('fs');
const UserModel = require('../models/user-model');
const dbPath = `${__dirname}/../db/user.json`;
const BoardService = require('./board-service');

function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if(err) return reject(err);
            const users = JSON.parse(data).map(UserModel.create);
            resolve(users);
        });
    });
}

function saveAll(users) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(users), (err, file) => {
            if(err) return reject(err);
            resolve();
        })
    })
}

async function add(user) {
    const allUsers = await findAll();
    const lastUser = allUsers[allUsers.length -1];
    const lastUserId = lastUser && lastUser.id || 0;
    user.id = lastUserId + 1;

    const newUser = UserModel.create(user);
    allUsers.push(newUser);

    await saveAll(allUsers);
    return newUser;
}

async function findById(userId) {
    const allUsers = await findAll();

    return allUsers.find(u => u.id == userId);
}

async function findUserAndBoards(userId) {
    const user = await findById(userId);
    user.boards = await BoardService.findByAuthor(user.id);
    
    return user;  
}

module.exports = {
    findAll,
    findById,
    add,
    findUserAndBoards
}