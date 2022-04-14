/**
 * 两个数组之间的交集
 * 示例：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 */
function intersection(arr1, arr2) {
  return arr1.filter((value) => new Set(arr2).has(value));
}

(function () {
  // let nums1 = [4, 9, 5],
  //   nums2 = [9, 4, 9, 8, 4];、
  let nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
  let res = intersection(nums1, nums2);
  // console.log(res);
})();
