module.exports = function check(str, bracketsConfig) {
  let bracket = bracketsConfig.map(elem => elem.join('')).join('');
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === bracket[0] || str[i] === bracket[2] || str[i] === bracket[4]) n++;
    if (str[i] === bracket[1] || str[i] === bracket[3] || str[i] === bracket[5]) n--;
    if (str[i] === bracket[0] && (str[i] !== '|' && str[i+1] !== '|') && (str[i+1] === bracket[3] || str[i+1] === bracket[5])) return false;
    if (n < 0) return false;
  }
  return n === 0; 
}
