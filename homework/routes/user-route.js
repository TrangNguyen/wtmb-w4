const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');

router.get('/', async(req, res, next) => {
    const users = await UserService.findAll();
    res.send(users);
});

router.get('/all', async(req, res, next) => {
    const users = await UserService.findAll();
    res.render('user-list', {users});
});

router.get('/:userId', async(req, res, next) => {
    const user = await UserService.findById(req.params.userId);
    res.render('user-detail', {user});
});
router.get('/:userId/boards', async(req, res, next) => {
    const user = await UserService.findUserAndBoards(req.params.userId);
    res.render('user-board-detail', {user});
});

router.post('/', async(req, res, next) => {
    console.log('Wanna add user ?', req.body);
    const newUser = await UserService.add(req.body);
    res.send(newUser);
});

module.exports = router;