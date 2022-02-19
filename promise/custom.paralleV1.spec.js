/**
 * javascript comment
 * @Author: chenhui
 * @Description 思路类似批量搬运，效率较低
 * @Param: {Array<Promise>}  一个promise数组，限制最大并发10个进行处理
 * @Return:  void
 */

const ParallePromise = async function (iterable, maxProcessing = 10) {
  return new Promise((resolve, reject) => {
    const result = [];
    const times = Math.ceil(iterable / maxProcessing);
    const arr = new Array(times).map((value, index) => index); //0 ... times
    for (let i of arr) {
      let res = await Promise.allSettled(
        iterable.slice(i * maxProcessing, (i + 1) * maxProcessing)
      );
      result.push(res);
    }
    resolve(result)
  });
};
