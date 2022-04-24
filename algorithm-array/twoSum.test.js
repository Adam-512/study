/**
 * 获取数组中满足两数之和的下标
 * nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 */

function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    map.set(arr[i], i);
  }
}

(function () {
  let res = twoSum([2, 7, 11, 15], 9);
  // console.log(res);
})();
