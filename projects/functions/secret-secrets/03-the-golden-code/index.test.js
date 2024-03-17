import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";
import * as index from "./index";
import * as solution from "./solution";
const { createCodeCracker } = process.env.TEST_SOLUTIONS ? solution : index;
describe(createCodeCracker, () => {
    describe("types", () => {
        test("function type", () => {
            expectType(createCodeCracker);
        });
        test("return type", () => {
            expectType(createCodeCracker({
                attempts: 1,
                makeGuess: () => "",
                validateGuess: () => false,
            }));
        });
    });
    test.each([
        [
            {
                attempts: 0,
                makeGuess: () => "",
                validateGuess: () => false,
            },
            "",
            undefined,
        ],
        [
            {
                attempts: 1,
                makeGuess: () => "",
                validateGuess: () => false,
            },
            "",
            undefined,
        ],
        [
            {
                attempts: 1,
                makeGuess: () => "",
                validateGuess: () => true,
            },
            "",
            "",
        ],
        [
            {
                attempts: 1,
                makeGuess: (text) => text,
                validateGuess: () => true,
            },
            "abc",
            "abc",
        ],
        [
            {
                attempts: 2,
                makeGuess: (text, attempt) => `${text}${attempt}`,
                validateGuess: (guess) => guess === "abc1",
            },
            "abc",
            "abc1",
        ],
        [
            {
                attempts: 2,
                makeGuess: (text, attempt) => `${text}${attempt}`,
                validateGuess: (guess) => guess === "abc2",
            },
            "abc",
            undefined,
        ],
    ])("%o %s %j", (options, text, expected) => {
        const codeCracker = createCodeCracker(options);
        expect(codeCracker(text)).toEqual(expected);
        // Run it extra times to make sure repeated runs still work 😉
        expect(codeCracker(text)).toEqual(expected);
        expect(createCodeCracker(options)(text)).toEqual(expected);
    });
});