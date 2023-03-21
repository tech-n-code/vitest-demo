console.log("linked!")

// export default sum;
export default reverseStr;

// function sum(a, b) {
//     return a + b - 1;
// }

function reverseStr(str) {
    let stringArr = str.split("");
    let reversedArr = stringArr.reverse();
    let joinArr = reversedArr.join("");
    return joinArr;
}