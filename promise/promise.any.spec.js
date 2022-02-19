/**
 * javascript comment
 * @Author: chenhui
 * @Param: { Array | Map | Set}  iterables  可迭代对象
 * @Return:  { Promise<any> | any}
 */

const PromiseAny = function (iterables) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    for (let i = 0; i < iterables.length; i++) {
      let p = iterables[i];
      if (p instanceof Promise) {
        p.then(resolve, (err) => {
          counter++;
          if (counter === iterables.length) {
            reject(err);
          }
        });
      } else {
        resolve(p);
      }
    }
  });
};

function main() {
  let p1 = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(1);
    }, 1000)
  );
  let p2 = new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("error 2");
    }, 3000)
  );
  const rp = PromiseAny([p1, p2]);
  rp.then((v) => console.log(v));
}
// main();
