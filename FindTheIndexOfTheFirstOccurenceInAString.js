/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
}

// Example usage:
console.log(strStr("hello", "ll"));  // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("", ""));         // Output: 0