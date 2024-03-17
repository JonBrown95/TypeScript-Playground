export function announceCharacter(raw) {
    const character = JSON.parse(raw);
    console.log(`I am ${character.name}.`);
    console.log(`My powers are: ${character.powers.join(", ")}.`);
    console.log(`I am ${character.side}.`);
    return character;
}
