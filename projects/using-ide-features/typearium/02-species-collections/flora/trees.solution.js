import { onlyTruthy } from "../utils/onlyTruthy.solution";
export function getTrees(settings) {
    return onlyTruthy(settings?.evergreen && "pine", settings?.fruitBearing && ["apple", "pear"]);
}
