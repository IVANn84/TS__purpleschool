function swapKeyOfValue(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}

console.log(swapKeyOfValue({ A: 1, B: 2 }));
