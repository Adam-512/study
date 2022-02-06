//array fill
function fill(arr, value, res = []) {
  if (res.length < arr.length) {
    res.push(value);
    return fill(arr, value, res);
  }
  return res;
}
console.log(fill(new Array(6), 1));
