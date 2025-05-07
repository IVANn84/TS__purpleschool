type Diff<OBJ, OBJ2> = Pick<OBJ, Exclude<keyof OBJ, keyof OBJ2>>;
type Key = string | number | symbol;

function getDifference<
  OBJ extends Record<Key, any>,
  OBJ2 extends Record<Key, any>
>(obj: OBJ, obj2: OBJ2): Diff<OBJ, OBJ2> {
  const keysObject = Object.keys(obj) as Array<keyof OBJ>;
  const keysObject2 = Object.keys(obj2) as Array<keyof OBJ2>;

  const difference = keysObject.filter((el) => !keysObject2.includes(el));

  return difference.reduce<Diff<OBJ, OBJ2>>((acc, key) => {
    acc[key as keyof Diff<OBJ, OBJ2>] = obj[key as keyof Diff<OBJ, OBJ2>];
    return acc;
  }, {} as Diff<OBJ, OBJ2>);
}

const obj = { a: 5, b: '' };
const obj2 = { a: 5, c: true };

const obj3 = { a: 5, b: '', f: 17 };
const obj4 = {};

console.log(getDifference(obj, obj2));
console.log(getDifference(obj3, obj4));
