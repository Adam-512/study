/**
 * 判断两个字符串时候互为异位词
 * 字符串都为小写，
 * 异位词，所有字母出现的次数和种类相同，但顺序不同
 * 用一个26长度的数组记录，字母出现的次数
 */

function samestr(s1 = "", t1 = "") {
  if (s1.length !== t1.length) {
    return false;
  }
  let arr = Array.from({ length: 26 }).fill(0);
  for (let i = 0; i < s1.length; i++) {
    arr[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  console.log(arr);

  for (let i = 0; i < t1.length; i++) {
    arr[t1.charCodeAt(i) - "a".charCodeAt(0)]--;
    if (arr[t1.charCodeAt(i) - "a".charCodeAt(0)] < 0) {
      return false;
    }
  }
  return true;
}

(function () {
  // var s = "anagram",
  //   t = "nagaram";
  var s = "rat",
    t = "car";
  var res = samestr(s, t);
  console.log(res);
})();
