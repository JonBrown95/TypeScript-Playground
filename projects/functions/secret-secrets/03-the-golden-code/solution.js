export function createCodeCracker({ attempts, makeGuess, validateGuess, }) {
    return (text) => {
        for (let i = 0; i < attempts; i += 1) {
            const guess = makeGuess(text, i);
            if (validateGuess(guess)) {
                return guess;
            }
        }
        return undefined;
    };
}
