"use strict";
var TheBard;
(function (TheBard) {
    function verifyProse(prose) {
        return TheBard.Poetry.schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
    }
    TheBard.verifyProse = verifyProse;
})(TheBard || (TheBard = {}));
