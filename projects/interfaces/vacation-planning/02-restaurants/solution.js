export function groupRestaurants(restaurants) {
    const grouped = {};
    for (const { city, name } of restaurants) {
        if (city in grouped) {
            grouped[city].push(name);
        }
        else {
            grouped[city] = [name];
        }
    }
    return grouped;
}
