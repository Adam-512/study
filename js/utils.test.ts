function debounce(fn: Function, delay: number) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(args);
    }, delay);
  };
}

function throttle(fn: Function, freq: number) {
  let time = 0;
  return (...args: any) => {
    const now = Date.now();
    if (now - time > freq) {
      fn.apply(args);
      time = now;
    }
  };
}

const t = debounce(() => {
  console.log(1);
}, 5000);

// t();
// t();
// setTimeout(() => {
//   t();
// }, 1000);

// const t2 = throttle(() => {
//   console.log("t2");
// }, 1000);
// t2();
// t2();
// t2();
// t2();
// t2();
// t2();
