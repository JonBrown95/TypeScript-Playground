import { onlyTruthy } from "../utils/onlyTruthy.solution";
export function getReptiles(settings) {
    return onlyTruthy(settings?.ferocious && "dragon", settings?.small && ["frog", "gecko"]);
}
