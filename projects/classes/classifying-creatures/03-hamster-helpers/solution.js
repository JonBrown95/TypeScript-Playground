export class SmallFurryPet {
    constructor(species) {
        this.happiness = 0;
        this.species = species;
    }
    isHappy() {
        return this.happiness >= 1;
    }
}
export class Gerbil extends SmallFurryPet {
    constructor() {
        super("Gerbil");
    }
    dig() {
        this.happiness += 1;
    }
    eats(food) {
        return ["insects", "plants", "seeds", "vegetables"].includes(food);
    }
}
export class Hamster extends SmallFurryPet {
    constructor() {
        super("Hamster");
    }
    eats() {
        return true;
    }
    run() {
        this.happiness += 1;
    }
}
