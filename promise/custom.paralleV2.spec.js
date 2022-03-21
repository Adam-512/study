/**
 * javascript comment
 * @Author: chenhui
 * @Description 同时并发，等待Promise.race,在加入新的
 * @Param: {Array<Promise>}
 * @Return:  void
 */

const ParallePromise = async function (iterable, limit = 2) {
  return new Promise(async (resolve, reject) => {
    const result = [];
    const executing = [];
    let counter = 0;
    for (let p of iterable) {
      const e = p
        .then((value) => {
          executing.splice(executing.indexOf(e), 1);
          console.log(value);
          counter++;
          result.push(p);
        })
        .finally(() => {
          if (counter === iterable.length) {
            resolve("done");
          }
        });
      executing.push(e);
      if (executing.length >= limit) {
        console.log("并发数", executing.length);
        await Promise.race(executing);
      }
    }
  });
};

function main() {
  const gePromise = function (interval) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(interval);
      }, interval);
    });
  };
  const ps = [1000, 6000, 1000, 7000, 5000, 2000].map((value) =>
    gePromise(value)
  );
  const rp = ParallePromise(ps);
  console.log(ps);
  rp.then(
    (v) => console.log(v),
    (err) => console.log("Promise all rejected: ", err)
  );
}

// main();
