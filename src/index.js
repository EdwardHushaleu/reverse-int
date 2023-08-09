module.exports = function reverse (n) {
  let x = Math.abs(n)
  let res = [...x.toString()].reverse().join('')
  return +res;
}
