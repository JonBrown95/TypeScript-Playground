// Write your types here! ✨
export function checkPassport(id) {
    const passport = window.passports[id];
    if (!passport) {
        return {
            allowed: false,
            reason: "No passport found.",
        };
    }
    if (passport.expires.getTime() < new Date().getTime()) {
        return {
            allowed: false,
            reason: `Passport for ${passport.name} has expired.`,
        };
    }
    return {
        allowed: true,
    };
}