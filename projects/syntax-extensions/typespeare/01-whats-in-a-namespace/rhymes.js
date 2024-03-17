"use strict";
var TheBard;
(function (TheBard) {
    var Rhymes;
    (function (Rhymes) {
        const vowels = new Set(["a", "e", "i", "o", "u", "y"]);
        /**
         * @remarks Very rudimentary rhyming detection. We should revisit.
         */
        function doesRhyme(a, b) {
            const lastConsonantsA = getLastConsonants(a);
            return lastConsonantsA && lastConsonantsA === getLastConsonants(b);
        }
        Rhymes.doesRhyme = doesRhyme;
        function getLastConsonants(text) {
            for (let i = text.length - 1; i >= 0; i--) {
                if (vowels.has(text[i])) {
                    return text.slice(i);
                }
            }
            return text;
        }
    })(Rhymes = TheBard.Rhymes || (TheBard.Rhymes = {}));
})(TheBard || (TheBard = {}));
