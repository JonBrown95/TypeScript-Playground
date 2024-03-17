import { getMammals } from "./fauna/mammals.solution";
import { getReptiles } from "./fauna/reptiles.solution";
export function getFauna(settings) {
    return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
