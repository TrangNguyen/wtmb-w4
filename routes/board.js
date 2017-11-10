const express = require('express');
const router = express.Router();

const BoardService = require('../services/board-service');

router.get('/', async (req, res, next) => {
    res.send(await BoardService.findAll());
});

router.get('/all', async (req, res, next) => {
    const boards = await BoardService.findAll();
    res.send(boards);
});

router.get('/:id', async (req, res, next) => {
    const board = await BoardService.find(req.params.id);

    res.render('board-detail', {board});
});

router.post('/', async (req, res, next) => {
    const board = await BoardService.add(req.body);

    res.send(board);
});

router.post('/:id/collaborate', async (req, res, next) => {
    const board = await BoardService.addCollaborator(req.params.id, req.body.collaboratorId);

    res.send(board);
});

router.delete('/:id', async (req, res, next) => {
    await BoardService.del(req.params.id);

    res.send('ok!');
});

module.exports = router;
