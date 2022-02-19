/** 
 * javascript comment 
 * @Author: chenhui   
 * @Param: {Array} iterable of Promise   
 * @Return:  {Promise<any>}
 */

const Race = function(iterable){
  return new Promise((resolve,reject)=>{
    for(let i=0;i<iterable.length;i++){
      let p = iterable[i]
      if(p instanceof Promise){
        p.then(resolve,reject)
      }
      else{
        resolve(p)
        break;
      }
    }
  })
}
