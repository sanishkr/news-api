export const debounce = (fn, delay) => {
  let timerId = null
  const ctx = this;
  return function (args) {
    console.log({args});
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn.apply(ctx, [...args])
    }, delay)
  }
}