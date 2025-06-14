import { sortBy } from 'sort-by';

type User = {
     id?: number;
     name?: string;
     age?: string;
     email?: {
          primary: string;
     };
};

const users: User[] = [
     {
          id: 7,
          name: 'Foo',
          age: '34',
          email: { primary: 'foo@email.com' },
     },
     {
          id: 3,
          name: 'Baz',
          age: '67',
          email: { primary: 'baz@email.com' },
     },
     {
          id: 4,
          name: 'Bar',
          age: '67',
          email: { primary: 'bar@email.com' },
     },
];

const result = users.sort(sortBy('name', 'age'));
console.log(result);
