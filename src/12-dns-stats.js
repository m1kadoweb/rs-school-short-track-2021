/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const size = domains[i].split('.').length - 1;
    let prefix = '';
    for (let j = size; j >= 0; j--) {
      if (j === size) {
        prefix = `.${domains[i].split('.')[j]}`;
        if (!obj[prefix]) {
          obj[prefix] = 1;
        } else {
          obj[prefix]++;
        }
      } else {
        prefix += `.${domains[i].split('.')[j]}`;
        if (!obj[prefix]) {
          obj[prefix] = 1;
        } else {
          obj[prefix]++;
        }
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
