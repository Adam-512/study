/**
 * 数组轮播，数组旋转
 * [1,2,3,4,5,6]  k = 3  输出：[4,5,6,1,2,3]
 */

/**
 * 解1 O(1) 原地反转数组
 * [6,5,4,3,2,1]
 * [4,5,6,3,2,1]
 * [4,5,6,1,2,3]
 * k 求余，因为k可能大于数组长度
 */
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start++], arr[end--]] = [arr[end], arr[start]];
  }
}

function rotate(arr, k) {
  k %= arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  console.log(arr);
}

(function () {
  // rotate([1, 2, 3, 4, 5, 6], 3);
})();

/**
 * 解2 O(n) 的空间，时间复杂度
 * 思路，复制一个数组，遍历[i+k] = [i]
 * 3 % 5 = 3
 */

function reverse2(arr, k) {
  let copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    arr[(i + k) % arr.length] = copy[i];
  }
  // console.log(arr);
}

(function () {
  reverse2([1, 2, 3, 4, 5, 6], 3);
})();
