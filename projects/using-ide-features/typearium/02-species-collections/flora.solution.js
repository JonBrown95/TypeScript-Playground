import { getFlowers } from "./flora/flowers.solution";
import { getTrees } from "./flora/trees.solution";
export function getFlora(settings) {
    return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
