/**
 * javascript comment
 * @Author: flydreame
 * @Description 借助Promise.allSettled，分组运行，思路类似批量搬运，效率较低
 * 快速生成有序数组的方法
 * @Param: {Array<Promise>}  一个promise数组，限制最大并发10个进行处理
 * @Return:  void
 */

const ParallePromise = function (iterable, maxProcessing = 3) {
  return new Promise(async (resolve, reject) => {
    let result = [];
    const groupLen = Math.ceil(iterable.length / maxProcessing);
    let arr = [...new Array(groupLen).keys()];
    // console.log("groups arr", arr);
    for (let i of arr) {
      let res = await Promise.allSettled(
        iterable.slice(i * maxProcessing, (i + 1) * maxProcessing)
      );
      result = [...result, ...res];
    }
    resolve(result);
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
  const p4 = Promise.resolve(5);
  const rp = ParallePromise([0, p1, p2, 3, p3, p4]);
  rp.then(
    (v) => console.log(v),
    (err) => console.log("Promise all rejected: ", err)
  );
}

// main();
