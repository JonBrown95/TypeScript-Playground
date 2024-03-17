import { criticizePerson } from "./criticizePerson.solution";
// Refactor here! ✨
function createPerson(name, quote) {
    return { name, quote, type: "person" };
}
const examplePeople = [
    createPerson("archeologist", "insert archeologist quote"),
    createPerson("historian", "insert historian quote"),
    createPerson("programmer", "#shipit"),
];
function describePerson(person) {
    const { name, type, quote } = person;
    return `The ${name} ${type} goes: ${quote}!`;
}
export function announceExamplePeople() {
    for (const person of examplePeople) {
        console.log(describePerson(person));
        criticizePerson(person);
    }
}
