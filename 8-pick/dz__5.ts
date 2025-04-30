//Задача: манипуляция свойств объектов:
// Задача: написание функции, которая извлекает из объекта только заданные свойства.
// Пример: дан объект пользователя с различными свойствами. Необходимо извлечь только определённые свойства.

const data = {
  name: 'Vasy',
  age: 33,
  scills: ['typeScript', 'javaScript'],
};

function pickObjectCase<T, K extends keyof T>(
  data: T,
  keys: K | K[]
): { [Proprty in keyof T]?: T[Proprty] } {
  if (Object.keys(data).length === 0) {
    return {} as { [Proprty in keyof T]?: T[Proprty] };
  }

  return Object.entries(data).reduce((acc, [key, val]) => {
    if (keys.includes) {
      acc[key] = val;
    }
    return acc;
  }, {} as { [Proprty in keyof T]?: T[Proprty] });
}

console.log(pickObjectCase(data, ['name']));
