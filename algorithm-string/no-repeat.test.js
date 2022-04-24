/**
 * 找出字符串中第一个不重复的字符，返回下标
 * 技巧：hash存索引
 */

function noRepeat(str = "") {
  let len = str.length;
  let position = new Map();
  for (let [i, ch] of Array.from(str).entries()) {
    if (position.has(ch)) {
      position.set(ch, -1);
    } else {
      position.set(ch, i);
    }
  }
  let first = len;
  for (let pos of position.values()) {
    if (pos !== -1 && pos < first) {
      first = pos;
    }
  }
  if (first === len) {
    first = -1;
  }
  return first;
}

(function () {
  //s = "leetcode"
  // s = "loveleetcode"
  var s = "aabb";
  let res = noRepeat(s);
  // console.log(res);
})();
