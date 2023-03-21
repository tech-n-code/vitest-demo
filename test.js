import { describe, expect, test} from "vitest";
// import sum from "app.js";
// import reverseStr from "app.js";
import isPalindrome from "./app";

describe("Test case: reversing a string", function() {
    test("should return true", function() {
        expect(isPalindrome("121")).toEqual(true);
        expect(isPalindrome("1221")).toEqual(true);
        expect(isPalindrome("madam")).toEqual(true);
    });
    test("should return false", function() {
        expect(isPalindrome("Hello")).toEqual(false);
        expect(isPalindrome("sup!")).toEqual(false);
        expect(isPalindrome("3467")).toEqual(false);
    });
});