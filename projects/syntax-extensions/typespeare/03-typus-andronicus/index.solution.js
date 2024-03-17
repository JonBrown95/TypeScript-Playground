import { conflictCreators, } from "./conflict";
import { resolutionCreators, } from "./resolution";
import { setupCreators } from "./setup";
function getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function enactTragedy(character, setupCreator, conflictCreator, resolutionCreator) {
    const setup = setupCreator(character);
    const conflict = conflictCreator({ character, setup });
    const resolution = resolutionCreator({ character, setup, conflict });
    return [setup, conflict, resolution];
}
function logTragedy(character, setup, conflict, resolution) {
    console.log(`Behold, the tale of ${character}!`);
    console.log(`The setting: ${setup.description}.`);
    console.log(conflict.description);
    console.log(resolution.description);
}
function runTragedy(character) {
    const conflictCreator = getRandom(conflictCreators);
    const resolutionCreator = getRandom(resolutionCreators);
    const setupCreator = getRandom(setupCreators);
    const [setup, conflict, resolution] = enactTragedy(character, setupCreator, conflictCreator, resolutionCreator);
    logTragedy(character, setup, conflict, resolution);
}
runTragedy("Typus Andronicus");
