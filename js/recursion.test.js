//array fill
function fill(arr, value, res = []) {
  if (arr.length === res.length) return res;
  res.push(value);
  return fill(arr, value, res);
}
//console.log(fill(new Array(6), 1));

//阶乘
function multiple(n, total = 1) {
  if (n === 1) return total;
  return n * multiple(n - 1, total);
}

//console.log(multiple(4))

//累加
function sum(n, total = 0) {
  if (n === 0) return total;
  return n + sum(n - 1, total);
}

// console.log(sum(3));
