export function minBy(array, cb) {
  if (array.length === 0) return undefined;
  let person = array[0];
  let min = array[0].age;
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) < min) {
      min = array[i].age;
      person = array[i];  
    }
  }
  return person;
}

export function maxBy(array, cb) {
  if (array.length === 0) return undefined;
  let person = array[0];
  let max = array[0].age;
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) > max) {
      max = array[i].age;
      person = array[i];  
    }
  }
  return person;
}
