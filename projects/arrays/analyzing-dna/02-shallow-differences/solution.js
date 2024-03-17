export function shallowDifferences(a, b) {
    if (a.length !== b.length) {
        return undefined;
    }
    const result = [];
    for (let i = 0; i < a.length; i += 1) {
        result.push(a[i] === b[i] ? a[i] : undefined);
    }
    return result;
}
