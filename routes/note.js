const express = require('express');
// set mergeParams to access params from parent route
// since note is a child route of board
const router = express.Router({mergeParams: true});

const NoteService = require('../services/note-service');
const BoardService = require('../services/board-service');

router.get('/', async (req, res, next) => {
    res.send(await NoteService.findAll());
})

router.get('/all', async (req, res, next) => {
    const notes = await NoteService.findAll();
    res.send({notes});
});

router.get('/:id', async (req, res, next) => {
    const note = await NoteService.find(req.params.id);

    res.send({note});
});

router.post('/', async (req, res, next) => {
    const note = await NoteService.add(req.body);
    // add note to the board it belongs to
    const boardId = req.params.id;
    const board = await BoardService.addNote(boardId, note);
    res.send(board);
});

// upvote a note
router.post('/:id/upvote', async (req, res, next) => {
    const note = await NoteService.find(req.params.id);
    note.stars += 1;

    const upVoteddNote = await note.save();
    res.send(upVoteddNote);
});

// downvote a note
router.post('/:id/downvote', async (req, res, next) => {
    const note = await NoteService.find(req.params.id);
    note.stars -= 1;

    const downVotedNote = await note.save();
    res.send(downVotedNote);
});

router.delete('/:id', async (req, res, next) => {
    await NoteService.del(req.params.id);

    res.send('ok!');
});

module.exports = router;
