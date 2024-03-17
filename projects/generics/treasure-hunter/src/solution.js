export function collectTreasure(buried, isFake, isReal) {
    const fake = [];
    const real = [];
    const scrap = [];
    function recurse(data) {
        const collected = collectTreasure(data, isFake, isReal);
        fake.push(...collected.fake);
        real.push(...collected.real);
        scrap.push(...collected.scrap);
    }
    if (buried instanceof Array) {
        for (const data of buried) {
            recurse(data);
        }
    }
    else {
        switch (buried.type) {
            case "treasure":
                if (isFake(buried.content)) {
                    fake.push(buried.content);
                }
                else if (isReal(buried.content)) {
                    real.push(buried.content);
                }
                else {
                    scrap.push(buried.content);
                }
                break;
            case "tunnels":
                for (const entrance of buried.entrances) {
                    recurse(entrance);
                }
                break;
            case "catacomb":
                recurse(buried.inside);
                break;
        }
    }
    return { fake, real, scrap };
}
