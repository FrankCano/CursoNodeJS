console.log("Empezando app...");

const _ = require("lodash");

console.log(_.isString(true));
console.log(_.isString("Andrew"));
console.log(_.uniq([1, 2, 3, 3, 2, 1, 4, 5]));

let users = [
  {
    first: "Keith",
    last: "Keough",
    email: "keith@codehangar.io",
    age: 35
  },
  {
    first: "Cassandra",
    last: "Wilcox",
    email: "cassie@codehangar.io",
    age: 25
  },
  {
    first: "Ian",
    last: "Grail",
    email: "ian@codehangar.io",
    age: 21
  },
  {
    first: "Georgette",
    last: "Keough",
    email: "mumabah@gmail.com",
    age: 25
  }
];

/**********************************/

// Here we create a new propertie called fullName
_.forEach(users, function(user, index) {
  user.fullName = user.first + " " + user.last;
});

/**********************************/

let usersNames = _.map(users, function(user) {
  return user.fullName;
});
// Output
//["Keith Keough", "Cassandra Wilcox", "Ian Grail", "Georgette Keough"]

/**********************************/
// This will order our array by first propertie
let sortedUsers = _.sortBy(users, "first");

/**********************************/
// This will give us a users with age>30
let filteredByAge = _.filter(users, function(user) {
	return user.age > 30;
});
/**********************************/
// This select a random item from a list
let luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];
_.sample(luckyDraw); // Colin

/**********************************/
// This remove a propertie from an object
objA = _.omit(users, ["last", "age"]);

/**********************************/
// This gets a random number between those numbers
_.random(15, 20);
