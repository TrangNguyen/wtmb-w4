/**
 * @param  {number} id
 * @param  {string} name
 * @param  {number} age, default to 0
 */
module.exports = class Person {
    // default param at the last position
    constructor(id, name, age = 0) {
        this.id = id
        this.name = name
        this.age = age
    }

    // create an instance of the class 
    static create(person) {
        return new Person(person.id, person.name, person.age);
    }
}
