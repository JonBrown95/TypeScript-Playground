export function criticizePerson(person) {
    if (person.quote.indexOf("#") !== -1) {
        console.log(`\t${person.name} should stop going on Twitter so much...`);
    }
}
