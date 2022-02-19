/**
 * javascript comment
 * @Author: chenhui
 * @Param: { Array | Map | Set}  iterables  可迭代对象
 * @Return:  { Promise<Array> | any }
 */
Promise.Alldone = function (iterables) {
  return new Promise((resolve, reject) => {
    let result = new Array(iterables.length);
    let counter = 0;
    for (let i = 0; i < iterables.length; i++) {
      const p = iterables[i];
      counter++;
      if (p instanceof Promise) {
        //结果与调用顺序无关，但必须与参数顺序一致
        p.then((value) => {
          result[counter] = value;
          if(result.length === iterables.length ){
            resolve(result)
          }
        }, reject);
      }
      else{
        result[counter] = p
      }
    }
  });
};
