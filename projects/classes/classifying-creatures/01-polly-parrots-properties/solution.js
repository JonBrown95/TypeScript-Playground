var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Parrot_name, _Parrot_phrases;
export class Parrot {
    constructor(name) {
        _Parrot_name.set(this, void 0);
        _Parrot_phrases.set(this, void 0);
        __classPrivateFieldSet(this, _Parrot_name, name, "f");
        __classPrivateFieldSet(this, _Parrot_phrases, [`${name} wants a cracker!`], "f");
    }
    announce() {
        return `Squawk! I'm ${__classPrivateFieldGet(this, _Parrot_name, "f")}!`;
    }
    learn(phrase) {
        __classPrivateFieldGet(this, _Parrot_phrases, "f").push(phrase);
    }
    speak() {
        return __classPrivateFieldGet(this, _Parrot_phrases, "f")[Math.floor(Math.random() * __classPrivateFieldGet(this, _Parrot_phrases, "f").length)];
    }
}
_Parrot_name = new WeakMap(), _Parrot_phrases = new WeakMap();
