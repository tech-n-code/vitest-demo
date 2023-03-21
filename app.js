console.log("linked!")

// export default sum;
// export default reverseStr;
export default isPalindrome;

// function sum(a, b) {
//     return a + b - 1;
// }

// function reverseStr(str) {
//     let stringArr = str.split("");
//     let reversedArr = stringArr.reverse();
//     let joinArr = reversedArr.join("");
//     return joinArr;
// }

function isPalindrome(sequence) {
    if (typeof sequence === "number") {
        sequence = sequence.toString();
    }
    let stringArr = sequence.split("");
    let reversedArr = stringArr.reverse();
    let joinArr = reversedArr.join("");
    return joinArr === sequence;
}