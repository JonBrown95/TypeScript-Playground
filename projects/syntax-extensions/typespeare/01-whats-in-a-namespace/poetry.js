"use strict";
var TheBard;
(function (TheBard) {
    var Poetry;
    (function (Poetry) {
        let Schemes;
        (function (Schemes) {
            Schemes.aabbaa = {
                name: "AABBAA",
                verify: (prose) => {
                    if (prose.length % 6 !== 0) {
                        return false;
                    }
                    for (let i = 0; i < prose.length; i += 6) {
                        if (!TheBard.Rhymes.doesRhyme(prose[i], prose[i + 1]) ||
                            !TheBard.Rhymes.doesRhyme(prose[i + 2], prose[i + 3]) ||
                            !TheBard.Rhymes.doesRhyme(prose[i + 4], prose[i + 5])) {
                            return false;
                        }
                    }
                    return true;
                },
            };
            Schemes.abab = {
                name: "ABAB",
                verify: (prose) => {
                    if (prose.length % 4 !== 0) {
                        return false;
                    }
                    for (let i = 0; i < prose.length; i += 6) {
                        if (!TheBard.Rhymes.doesRhyme(prose[i], prose[i + 2]) ||
                            !TheBard.Rhymes.doesRhyme(prose[i + 1], prose[i + 3])) {
                            return false;
                        }
                    }
                    return true;
                },
            };
            Schemes.limerick = {
                name: "Limerick",
                verify: (prose) => {
                    return (prose.length === 5 &&
                        TheBard.Rhymes.doesRhyme(prose[0], prose[1]) &&
                        TheBard.Rhymes.doesRhyme(prose[2], prose[3]) &&
                        TheBard.Rhymes.doesRhyme(prose[1], prose[4]));
                },
            };
        })(Schemes || (Schemes = {}));
        Poetry.schemesInOrder = [
            Schemes.aabbaa,
            Schemes.abab,
            Schemes.limerick,
        ];
    })(Poetry = TheBard.Poetry || (TheBard.Poetry = {}));
})(TheBard || (TheBard = {}));
