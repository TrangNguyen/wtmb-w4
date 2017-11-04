module.exports = class Board {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.notes = [];
        this.partcicpants = [];
    }

    static create(board) {
        return new Board(board.id, board.title, board.author);
    }
}