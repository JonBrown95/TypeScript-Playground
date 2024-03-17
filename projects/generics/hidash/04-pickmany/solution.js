export function pickMany(container, keys) {
    const result = [];
    for (const key of keys) {
        result.push(container[key]);
    }
    return result;
}
