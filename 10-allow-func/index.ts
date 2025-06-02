class User {
     @allowFunc(7)
     age: number;
}

function allowFunc(item: number) {
     return (target: Object, propettyKey: string | symbol) => {
          let value: number;
          const setter = function (newValue: number) {
               if (newValue > item) {
                    console.log(`Нельзя присвоить значение больше ${item}`);
               } else {
                    value = newValue;
               }
          };
          Object.defineProperty(target, propettyKey, {
               set: setter,
               get() {
                    return value;
               },
          });
     };
}

const result = new User();

result.age = 6;
console.log(result.age);
