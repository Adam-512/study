/**
 * 股票最佳买入时间相关
 * 参数：一个数字数组
 * 情况1： 求最大利润，不限制买入次数
 * 情况2： 求最大利润，只能买入一次  等同于 求数组里面差值最大的两个数，切 前一个小于后一个数
 */

function maxProfit1(arrs) {
  let profit = 0;
  for (let i = 1; i < arrs.length; i++) {
    if (arrs[i] > arrs[i - 1]) {
      profit = profit + arrs[i] - arrs[i - 1];
    }
  }
  return profit;
}

//最大差值
function maxProfit2(arrs) {
  let min = arrs[0];
  let profit = 0;
  for (let i = 1; i < arrs.length; i++) {
    min = Math.min(min, arrs[i]);
    profit = Math.max(profit, arrs[i] - min);
  }
  return profit;
}

(function () {
  // let arr = [7, 1, 5, 3, 6, 4];
  // let arr = [1,2,3,4,5];

  // let arr2 = [7,1,5,3,6,4]
  let arr2 = [7, 6, 4, 3, 1];
  let max = maxProfit2(arr2);
  console.log(max);
})();
