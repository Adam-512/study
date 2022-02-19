/**
 * javascript comment
 * @Author: chenhui
 * @Param: { Array | Map | Set}  iterables  可迭代对象
 * @Return:  { Promise<any> | any}
 */

const PromiseAny = function () {
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
