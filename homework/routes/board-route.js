const express = require('express');
const router = express.Router();
const BoardService = require('../services/board-service');

router.get('/', async(req, res, next) => {
    const boards = await BoardService.findAll();
    res.send(boards);
});

router.get('/all', async(req, res, next) => {
    const boards = await BoardService.findAll();
    res.render('board-list', boards);
});

router.get('/:boardId', async(req, res, next) => {
    const board = await BoardService.findById(req.params.boardId);
    res.render('board-detail', board);
});

router.post('/boards', async(req, res, next) => {
    const newBoard = await BoardService.add(req.body);
    res.send(newBoard);
});

module.exports = router;