/**
 *
 * @param {number []} arrs
 * @return {number}
 */
function removeDuplicates(nums) {
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[left - 1]) {
      continue;
    } else {
      nums[left] = nums[i];
      left++;
    }
  }
  nums.length = left;
  return left;
}

(function () {
  let arr = [1, 1, 1, 2, 3, 3, 4, 4, 4, 5];
  let len = removeDuplicates(arr);
  console.log(len);
  console.log(arr);
})();
