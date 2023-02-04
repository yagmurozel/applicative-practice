// see e16.md

export function find(array, callback) {
  let flag = true;
  let result;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])){
      result = array[i];
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  if (flag === true) {
    return result;
  } else {
    return undefined;
  }
}
