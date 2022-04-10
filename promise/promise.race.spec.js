/**
 * 传入数组
 * then 接收两个参数，启动全部Promise
 * 非Promise直接reolve
 * race是获取最快执行的结果，不管成功还是失败
 * {Array<any>} pr
 */

const Race = function (iterable) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < iterable.length; i++) {
      let p = iterable[i];
      if (p instanceof Promise) {
        p.then(resolve, reject);
      } else {
        resolve(p);
        break;
      }
    }
  });
};

function main() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
    }, 1000);
  });

  const rp = Race([p1, p2]);
  rp.then(
    (value) => {
      console.log("resoloved: ", value);
    },
    (err) => console.log("rejected: ", err)
  );
}

// main();
