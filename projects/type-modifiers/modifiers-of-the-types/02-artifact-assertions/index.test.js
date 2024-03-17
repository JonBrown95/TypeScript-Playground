import { describe, expect, it } from "@jest/globals";
import { expectType } from "tsd";
import * as index from "./index";
import * as solution from "./solution";
const { getArtifactType } = process.env.TEST_SOLUTIONS ? solution : index;
describe(getArtifactType, () => {
    describe("type", () => {
        it("is a union of literals", () => {
            const type = getArtifactType("Black Garnet");
            expectType(type);
        });
    });
    describe("return", () => {
        it.each([
            ["magic", "Black Garnet"],
            ["fortress", "Castle TypeScript"],
            ["device", "Cosmic Key"],
            ["sword", "Power Sword"],
            ["magic", "Starseed"],
            ["sword", "Sword of the Ancients"],
        ])("returns %j when the name is %j", (expected, name) => {
            expect(getArtifactType(name)).toBe(expected);
        });
    });
});
