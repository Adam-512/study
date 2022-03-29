function cloneArray(o, fn) {
  let arr = new Array(o.length);
  //如果使用forEach的话，undefined会被忽略
  for (let i = 0; i < o.length; i++) {
    var cur = o[i];
    if (typeof cur !== "object" || cur === null) {
      arr[i] = cur;
    } else if (cur instanceof Date) {
      arr[i] = new Date(cur);
    } else {
      arr[i] = fn(cur);
    }
  }
  return arr;
}

function deepClone(o) {
  if (typeof o !== "object" || o === null) return o;
  if (o instanceof Date) return new Date(0);
  if (o instanceof Array) return cloneArray(o, deepClone);
  if (o instanceof Map) return new Map(cloneArray(Array.from(0), deepClone));
  if (o instanceof Set) return new Set(cloneArray(Array.from(0), deepClone));
  let o2 = {};
  for (let k in o) {
    //for in 会遍历继承过来的可枚举属性
    if (Object.hasOwnProperty.call(o, k) === false) continue;
    var cur = o[k];
    if (typeof o !== "object" || o === null) {
      o2[k] = cur;
    } else if (o instanceof Date) {
      o2[k] = new Date(cur);
    } else if (o instanceof Map) {
      o2[k] = new Map(cloneArray(Array.from(0), deepClone));
    } else if (o instanceof Set) {
      o2[k] = new Set(cloneArray(Array.from(0), deepClone));
    } else {
      o2[k] = deepClone(cur);
    }
  }
  return o2;
}
