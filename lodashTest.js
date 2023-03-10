// Sắp xếp tên user theo bảng chữ cái
const _ = require("lodash");
let users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 },
];

let newUsers = _.sortBy(users, [
  function (o) {
    return o.user;
  },
]);
console.log(newUsers);

// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

// _.sortBy(users, ["user", "age"]);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
