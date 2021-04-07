/*
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const splitNum = n.toString().split('');
  let min = Number(splitNum[0]);
  for (let i = 0; i < splitNum.length; i++) {
    if (min > splitNum[i]) {
      min = splitNum[i];
    }
  }
  for (let j = 0; j < splitNum.length; j++) {
    if (Number(min) === Number(splitNum[j])) {
      splitNum.splice(j, 1);
    }
  }
  return Number(splitNum.join(''));
}

module.exports = deleteDigit;
