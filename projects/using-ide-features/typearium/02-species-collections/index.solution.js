// Refactor here! ✨
import { getFauna } from "./fauna.solution";
import { getFlora } from "./flora.solution";
import { onlyTruthy } from "./utils/onlyTruthy.solution";
export function getEverything(settings) {
    return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
