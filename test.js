import { describe, expect, test} from "vitest";
import sum from "app.js";

describe("Test case: adding two numbers", function() {
    test("sum", function() {
        expect(sum(1,1)).toEqual(2);
    })
})