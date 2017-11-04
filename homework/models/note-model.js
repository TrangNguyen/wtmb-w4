module.exports = class Note {
    constructor(id, content) {
        this.id = id;
        this.content = content;
        this.votes = 0;
    }

    static create(note) {
        return new Note(note.id, note.content);
    }
}