import { schemesInOrder } from "./poetry.solution";
export function verifyProse(prose) {
    return schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
}
