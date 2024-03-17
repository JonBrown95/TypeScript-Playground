const artifacts = {
    "Black Garnet": {
        type: "magic",
    },
    "Castle TypeScript": {
        type: "fortress",
    },
    "Cosmic Key": {
        type: "device",
    },
    "Power Sword": {
        type: "sword",
    },
    Starseed: {
        type: "magic",
    },
    "Sword of the Ancients": {
        type: "sword",
    },
};
export function getArtifactType(name) {
    return artifacts[name].type;
}
