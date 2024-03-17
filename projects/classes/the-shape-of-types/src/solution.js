var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Horror_instances, _Horror_consumed, _Horror_consume, _Sorcerer_evil;
export class Horror {
    constructor() {
        _Horror_instances.add(this);
        _Horror_consumed.set(this, []);
    }
    doBattle(opponent) {
        if (this.getPower() >= opponent.getPower()) {
            __classPrivateFieldGet(this, _Horror_instances, "m", _Horror_consume).call(this, opponent);
        }
    }
    getPower() {
        return __classPrivateFieldGet(this, _Horror_consumed, "f").reduce((previous, consumed) => previous + this.getPowerFrom(consumed), __classPrivateFieldGet(this, _Horror_consumed, "f").length);
    }
}
_Horror_consumed = new WeakMap(), _Horror_instances = new WeakSet(), _Horror_consume = function _Horror_consume(opponent) {
    __classPrivateFieldGet(this, _Horror_consumed, "f").push({
        evil: opponent.isEvil(),
        name: opponent.name,
        power: opponent.getPower(),
    });
};
export class Demon extends Horror {
    constructor() {
        super(...arguments);
        this.name = "Demon";
    }
    getPowerFrom(consumed) {
        return consumed.evil ? consumed.power / 2 : consumed.power * 2;
    }
    isEvil() {
        return true;
    }
}
export class Sorcerer extends Horror {
    constructor(name, evil) {
        super();
        _Sorcerer_evil.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _Sorcerer_evil, evil, "f");
    }
    getPowerFrom(consumed) {
        return consumed.evil === __classPrivateFieldGet(this, _Sorcerer_evil, "f") ? consumed.power * 2 : consumed.power;
    }
    isEvil() {
        return __classPrivateFieldGet(this, _Sorcerer_evil, "f");
    }
}
_Sorcerer_evil = new WeakMap();
