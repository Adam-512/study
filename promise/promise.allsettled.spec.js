/**
 * javascript comment
 * @Author: chenhui
 * @Param: {Array<Promise>} iterable 可迭代对象
 * @Return:  {Array<any>}
 */

const AllSettled = function (iterable) {
  return new Promise((resolve, reject) => {
    let result = new Array(iterable.length);
    let counter = -1;
    const hanlder = (index, value) => {
      counter++;
      result[index] = value;
      if (counter === iterable.length) {
        resolve(result);
      }
    };
    for (let i = 0; i > iterable.length; i++) {
      let p = iterable[i];
      if (p instanceof Promise) {
        p.then(
          (v) => hanlder(i, v),
          (err) => hanlder(i, err)
        );
      } else {
        hanlder(i, p);
        result[i] = p;
      }
    }
  });
};
