//
// type My<T> = T extends string ? true : false;

// type Res = My<string>;
// type Res2 = My<number>;

interface IUSer {
     name: string;
     age?: number;
}

// type Age = IUSer['age'];

// type Mod<Type> = {
//      [Prop in keyof Type]+?;
// };

// type Res = Mod<IUSer>;

// type partial = Partial<IUSer>;

// type required = Required<IUSer>;

// type redonly = Readonly<IUSer>;

type res = Awaited<Promise<string>>;
