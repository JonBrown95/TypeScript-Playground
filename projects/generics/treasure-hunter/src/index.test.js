import { describe, expect, it, test } from "@jest/globals";
import { expectType } from "tsd";
import * as index from "./index";
import * as solution from "./solution";
const { collectTreasure } = process.env.TEST_SOLUTIONS ? solution : index;
describe(collectTreasure, () => {
    describe("types", () => {
        test("function type", () => {
            expectType(collectTreasure);
        });
    });
    it("adds a fake item to the fake array when the type is treasure", () => {
        const content = "fake";
        const buried = {
            content,
            type: "treasure",
        };
        const actual = collectTreasure(buried, (item) => typeof item === "string", (item) => typeof item === "number");
        expect(actual).toEqual({
            fake: [content],
            real: [],
            scrap: [],
        });
    });
    it("adds a real item to the real array when the type is treasure", () => {
        const content = "real";
        const buried = {
            content,
            type: "treasure",
        };
        const actual = collectTreasure(buried, (item) => typeof item === "number", (item) => typeof item === "string");
        expect(actual).toEqual({
            fake: [],
            real: [content],
            scrap: [],
        });
    });
    it("adds a scrap item to the scrap array when the type is treasure", () => {
        const content = "scrap";
        const buried = {
            content,
            type: "treasure",
        };
        const actual = collectTreasure(buried, (item) => typeof item === "number", (item) => typeof item === "number");
        expect(actual).toEqual({
            fake: [],
            real: [],
            scrap: [content],
        });
    });
    it("recurses into content when the type is catacomb", () => {
        const content = "fake";
        const buried = {
            inside: {
                content,
                type: "treasure",
            },
            type: "catacomb",
        };
        const actual = collectTreasure(buried, (item) => typeof item === "string", (item) => typeof item === "number");
        expect(actual).toEqual({
            fake: [content],
            real: [],
            scrap: [],
        });
    });
    it("recurses into entrances when the type is tunnels", () => {
        const first = "first";
        const second = "second";
        const buried = {
            entrances: [
                {
                    content: first,
                    type: "treasure",
                },
                {
                    content: second,
                    type: "treasure",
                },
            ],
            type: "tunnels",
        };
        const actual = collectTreasure(buried, (item) => typeof item === "string", (item) => typeof item === "number");
        expect(actual).toEqual({
            fake: [first, second],
            real: [],
            scrap: [],
        });
    });
});
