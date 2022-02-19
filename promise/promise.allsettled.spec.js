/**
 * javascript comment
 * @Author: chenhui
 * @Param: {Array<Promise>} iterable 可迭代对象
 * @Return:  {Array<any>}
 */

const AllSettled = function (iterable) {
  return new Promise((resolve, reject) => {
    let result = new Array(iterable.length);
    let counter = 0;
    const hanlder = (index, value) => {
      counter++;
      result[index] = value;
      if (counter === iterable.length) {
        resolve(result);
      }
    };
    for (let i = 0; i < iterable.length; i++) {
      let p = iterable[i];
      if (p instanceof Promise) {
        p.then(
          (v) => hanlder(i, v),
          (err) => hanlder(i, err)
        );
      } else {
        hanlder(i, p);
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
  const rp = AllSettled([p1, p2, 3]);
  rp.then((v) => console.log(v));
}
// main();
