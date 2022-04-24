/**
 * 输入：s = ["h","e","l","l","o"]
 *  输出：["o","l","l","e","h"]
 */

function reverse(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    [str[start++], str[end--]] = [str[end], str[start]];
  }
}

(function () {
  let s = ["h", "e", "l", "l", "o"];
  reverse(s);
  // console.log(s);
})();
