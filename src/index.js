module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig;
  let separ = '\\';
  let regEx ='';
  let checkStr = str;
  let result;
  let x;
  let averStr = checkStr.length/* Math.round(checkStr.length / 2) */;

  for (i = 0; i < arr.length; i++) {
  if (arr.length > 1 && (i + 1) < arr.length) {
    x = '|';
  } else {
    x = '';
  };
  if (isNaN(Number(arr[i][0])) || isNaN(Number(arr[i][1]))) {
    separ = '\\';
  } else {
    separ = '';
  };
  regEx = regEx + separ + arr[i][0] + separ + arr[i][1] + x;
  }

  regEx = new RegExp(regEx);
  for (j = 0; j <= averStr; j++ ) {
    checkStr = checkStr.replace(regEx, '');
  };
  return result = (checkStr.length == 0) ? true : false;
}
