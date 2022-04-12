/**
 * 找到只出现一次的元素，或者有序数组中缺失的元素
 * 利用异或运算的特性
 * 1.0 和 任何数字 异或为本身
 * 2.任何数字异或自己为0
 */

/**
 * 一个数字数组元素都出现两次，其中一个出现一次，找到那个数字
 */

function findTheOne(arr) {
  let theone = 0;
  for (let i = 0; i < arr.length; i++) {
    theone ^= arr[i];
  }
  return theone;
}

// (function(){
//   let arr = [4,1,2,1,2]
//   let res =  findTheOne(arr)
//   console.log(res)
// })()

/**
 * 一个长度为n-1的数组成员是1~n 乱序的，找出缺失的那个数字
 */

function findLost(arr, n) {
  let nums = [...Array.from({ length: n + 1 }).keys()].slice(1);
  console.log(nums);
  let res = "0";
  for (let i = 0; i < nums.length; i++) {
    let s = arr[i] ? `^${arr[i]}` : "";
    res += `^${nums[i]}${s}`;
  }
  console.log(res);
  return eval(res);
}

(function () {
  let arr = [5, 2, 4, 1, 6];
  let res = findLost(arr, 6);
  console.log(res);
})();
