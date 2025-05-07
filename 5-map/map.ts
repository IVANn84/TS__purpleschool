// Цель задания:
// Создать свою реализацию класса мап, имитируя поведение стандартной хэш-мапы.

type temperature = number;

type city = string | number | symbol;

type value = [city, temperature];

class MyMap {
  constructor(protected map: Record<city, value> = {}) {
    this.map = map;
  }

  hashKey(key: city) {
    return JSON.stringify(key);
  }

  add(key: city, value: temperature) {
    const hash = this.hashKey(key);
    this.map = { ...this.map, [hash]: [key, value] };
  }

  get(item: city): temperature {
    return this.map[this.hashKey(item)][1];
  }

  delete(item: city): void {
    const hash = this.hashKey(item);

    const filtered = Object.fromEntries(
      Object.entries(this.map).filter(([key]) => key !== hash)
    );
    this.map = filtered;
  }

  clear() {
    return (this.map = {});
  }
}

const myMap = new MyMap();
myMap.add('London', 10);
myMap.add('Moskva', -20);
console.log(myMap);
myMap.delete('Moskva');
console.log(myMap);
// myMap.clear();
// console.log(myMap);
