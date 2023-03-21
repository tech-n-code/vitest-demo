import { describe, expect, test} from "vitest";
// import sum from "app.js";
import reverseStr from "app.js";

describe("Test case: reversing a string", function() {
    test("reverseStr", function() {
        expect(reverseStr("Hello")).toEqual("olleH");
    })
})