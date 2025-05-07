const obj = { a: 5, b: '' };
const obj2 = { a: 5, c: true };

const obj3 = { a: 5, b: '', f: 17 };
const obj4 = {};

function getDifference(obj, obj2) {
  const keysObject = Object.keys(obj);
  const keysObject2 = Object.keys(obj2);

  const difference = keysObject.filter((el) => !keysObject2.includes(el));

  return difference.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

console.log(getDifference(obj, obj2));
console.log(getDifference(obj3, obj4));
