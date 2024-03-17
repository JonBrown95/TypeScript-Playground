// Refactor here! ✨
function onlyTruthy(...items) {
    return items.flatMap((item) => {
        if (typeof item === "string") {
            return item;
        }
        if (item instanceof Array) {
            return item.flatMap((subItem) => onlyTruthy(subItem));
        }
        return [];
    });
}
function getMammals(settings) {
    return onlyTruthy(settings?.cute && [
        "cats",
        "dogs",
        settings?.deadly && "monty python rabbit",
    ], settings?.deadly && ["lion", "tiger"]);
}
function getReptiles(settings) {
    return onlyTruthy(settings?.ferocious && "dragon", settings?.small && ["frog", "gecko"]);
}
function getFauna(settings) {
    return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
function getFlowers(settings) {
    return onlyTruthy(settings?.colorful && ["carnation", "lilac", "tulip"], settings?.colorful && settings?.prickly && "rose");
}
function getTrees(settings) {
    return onlyTruthy(settings?.evergreen && "pine", settings?.fruitBearing && ["apple", "pear"]);
}
function getFlora(settings) {
    return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
export function getEverything(settings) {
    return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
