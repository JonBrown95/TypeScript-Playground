export class Puppy {
    constructor(colors, furriness) {
        this.colors = colors;
        this.furriness = furriness;
    }
    adopt(owner) {
        this.owner = owner;
    }
}
