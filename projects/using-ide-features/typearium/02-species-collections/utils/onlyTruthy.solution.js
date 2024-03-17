export function onlyTruthy(...items) {
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
