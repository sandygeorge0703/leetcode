var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  console.log(i); // This will log the value of i
  return i;
};

// Example usage
let nums = [3, 2, 2, 3];
let val = 3;
let result = removeElement(nums, val);
console.log("Result:", result); // This will log the result returned by removeElement
