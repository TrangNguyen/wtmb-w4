module.exports = class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static create(user) {
        return new User(user.id, user.name);
    }
}