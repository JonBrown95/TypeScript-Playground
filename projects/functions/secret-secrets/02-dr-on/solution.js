export function createAdvancedCipher(onVowel, onConsonant, onPunctuation) {
    return (text) => {
        let result = "";
        for (const character of text) {
            const cipher = /[aeiou]/i.test(character)
                ? onVowel
                : /[bcdfghjklmnpqrstvwxyz]/i.test(character)
                    ? onConsonant
                    : onPunctuation;
            result += cipher(character);
        }
        return result;
    };
}
