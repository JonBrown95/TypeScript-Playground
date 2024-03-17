export function createCipher(cipher) {
    return (text) => {
        let result = "";
        for (const character of text) {
            result += cipher(character);
        }
        return result;
    };
}
