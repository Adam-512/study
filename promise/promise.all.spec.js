/**
 * javascript comment
 * @Author: chenhui
 * @Param: { Array | Map | Set}  iterables  可迭代对象
 * @Return:  { Promise<Array> | any }
 */
const Alldone = function (iterables) {
  return new Promise((resolve, reject) => {
    let result = new Array(iterables.length);
    let counter = 0;
    //注意使用块级作用域let
    for (let i = 0; i < iterables.length; i++) {
      let p = iterables[i];
      if (p instanceof Promise) {
        //因promise的先后顺序不确定，以参数顺序排列结果
        p.then((value) => {
          result[i] = value;
          counter++;
          console.log(value);
          console.log("counter: ", counter);
          if (counter === iterables.length) {
            resolve(result);
          }
        }, reject);
      } else {
        counter++;
        result[i] = p;
      }
    }
  });
};

function main() {
  const p1 = new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 2000)
  );
  const p2 = new Promise((resolve) =>
    setTimeout(() => {
      resolve(2);
    }, 1000)
  );
  const p3 = Promise.reject(9);
  const rp = Alldone([0, p1, p2, 3, p3]);
  rp.then(
    (v) => console.log(v),
    (err) => console.log("Promise all rejected: ", err)
  );
}
// main();
