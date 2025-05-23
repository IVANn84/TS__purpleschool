declare module 'sort-by' {
     type User = {
          id?: number;
          name?: string;
          age?: string;
          email?: {
               primary: string;
          };
     };

     export function sortBy(
          ...field: string[]
     ): (obj1: User, obj2: User) => number;
}
