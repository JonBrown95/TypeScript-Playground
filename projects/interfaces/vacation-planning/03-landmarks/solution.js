export function describeLandmark(landmark) {
    const output = [
        `${landmark.name} is a ${landmark.type} in Upstate New York.`,
    ];
    switch (landmark.type) {
        case "lake":
            output.push(`It covers ${landmark.miles} square miles of water.`);
            break;
        case "mountain":
            output.push(`Its peak is ${landmark.height} feet high.`);
            break;
        case "lighthouse":
            output.push(`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`);
            break;
        case "park":
            output.push(`It covers ${landmark.acres} square acres.`);
            break;
        case "river":
            output.push(`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`);
            break;
        case "waterfall":
            output.push(`It is ${landmark.height} feet high.`);
            break;
    }
    return output.join("\n");
}
