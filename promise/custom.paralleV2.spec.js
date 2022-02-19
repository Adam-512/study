/**
 * javascript comment
 * @Author: chenhui
 * @Description 同时并发，等待Promise.race,在加入新的
 * @Param: {Array<Promise>}
 * @Return:  void
 */

const ParallePromise = async function (iterable, limit = 10) {
  return new Promise((resolve, reject) => {
    const result = [];
    const executing = [];
    for (let p of iterable) {
      result.push(p);
      const e = p
        .then(() => executing.splice(executing.indexOf(e), 1))
        .finaly(() => {
          if (result.length === iterable.length) {
            resolve();
          }
        });
      executing.push(e);
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  });
};
