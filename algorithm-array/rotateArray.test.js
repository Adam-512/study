/**
 * 顺时针旋转一个n*n的二位矩阵
 * 给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */
function rotateArray(arr) {
  let cpArr = JSON.parse(JSON.stringify(arr));
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[j][n - i - 1] = cpArr[i][j];
    }
  }
}

(function () {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  rotateArray(arr);
  // console.log(arr);
})();
