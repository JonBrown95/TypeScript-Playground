export function createKitchen(budget, cleaner, supplier) {
    let dirt = 0;
    let stock = {
        breads: 0,
        fruits: 0,
        sauces: 0,
        vegetables: 0,
    };
    return {
        announce() {
            return [
                `I have ${dirt} much dirt`,
                `${budget} budget`,
                `${stock.breads} bread(s)`,
                `${stock.fruits} fruit(s)`,
                `${stock.sauces} sauce(s)`,
                `and ${stock.vegetables} vegetable(s).`,
            ].join(", ");
        },
        clean(time) {
            dirt = cleaner(dirt, time);
        },
        purchase(expense) {
            if (budget < expense) {
                return false;
            }
            const ingredients = supplier(expense);
            stock.breads += ingredients.breads;
            stock.fruits += ingredients.fruits;
            stock.sauces += ingredients.sauces;
            stock.vegetables += ingredients.vegetables;
            budget -= expense;
            return true;
        },
        prepare(recipe) {
            if (dirt >= 100) {
                return false;
            }
            const result = recipe(stock);
            dirt += 1;
            if (result.succeeded) {
                stock = result.newStock;
            }
            return result.succeeded;
        },
    };
}
