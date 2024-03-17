export const setupCreators = [
    () => ({
        description: "Ancient Britain",
        setting: "Britain",
    }),
    () => ({
        description: "Denmark in the late Middle Ages",
        setting: "Denmark",
    }),
    (character) => ({
        description: `${character}'s journey home to England`,
        setting: "England",
    }),
    (character) => ({
        description: `${character}'s journey home to France`,
        setting: "France",
    }),
    () => ({
        description: "11th Century Scotland",
        setting: "Scotland",
    }),
    () => ({
        description: "Verona during the Renaissance",
        setting: "Verona",
    }),
];
