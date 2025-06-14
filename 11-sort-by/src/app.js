"use strict";
exports.__esModule = true;
var sort_by_1 = require("sort-by");
var users = [
    {
        id: 7,
        name: 'Foo',
        age: '34',
        email: { primary: 'foo@email.com' }
    },
    {
        id: 3,
        name: 'Baz',
        age: '67',
        email: { primary: 'baz@email.com' }
    },
    {
        id: 4,
        name: 'Bar',
        age: '67',
        email: { primary: 'bar@email.com' }
    },
];
var result = users.sort((0, sort_by_1.sortBy)('name', 'age'));
console.log(result);
