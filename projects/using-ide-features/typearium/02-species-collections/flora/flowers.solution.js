import { onlyTruthy } from "../utils/onlyTruthy.solution";
export function getFlowers(settings) {
    return onlyTruthy(settings?.colorful && ["carnation", "lilac", "tulip"], settings?.colorful && settings?.prickly && "rose");
}
