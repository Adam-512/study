/**
 * javascript comment
 * @Author: chenhui
 * @Param: {Array} iterable of Promise
 * @Return:  {Promise<any>}
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
