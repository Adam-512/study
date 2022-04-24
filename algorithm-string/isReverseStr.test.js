/**
 * 判断是否是回文字符串，只考虑字符数字
 * 回文字符：正序和倒序一致
 */

//1.反转字符串
//2.双指针

function isReverseStr(str = "") {
  if (str === "") {
    return true;
  }
  let s = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  let start = 0,
    end = s.length - 1;
  let isReverse = true;
  while (start < end) {
    if (s[start++] !== s[end--]) {
      isReverse = false;
      break;
    }
  }
  return isReverse;
}

(function () {
  var s = "race a car";
  // var s = "A man, a plan, a canal: Panama";
  var res = isReverseStr(s);
  // console.log(res);
})();
