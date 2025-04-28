// Цель задания: Написать функцию, которая меняет местами ключи и значения в переданном объекте.

type init = string | number;

function swapKeyOfValue<K extends init, V extends init>(
  obj: Record<K, V>
): Record<V, K> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value as V] = key as K;
    return acc;
  }, {} as Record<V, K>);
}

console.log(swapKeyOfValue({ A: 1, B: 2 }));
