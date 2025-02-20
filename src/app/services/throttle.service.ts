
export function throttle<T>(func: (...args: any[]) => void, limit: number): (...args: any[]) => void {
  let lastFunc: number;
  let lastRan: number;

  return function(this: T, ...args: any[]) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}
