import { onlyTruthy } from "../utils/onlyTruthy.solution";
export function getMammals(settings) {
    return onlyTruthy(settings?.cute && [
        "cats",
        "dogs",
        settings?.deadly && "monty python rabbit",
    ], settings?.deadly && ["lion", "tiger"]);
}
