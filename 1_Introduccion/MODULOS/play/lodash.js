const _ = require('lodash');

console.log(_.isString(123));

console.log(_.isString("Andrew"));

console.log(_.uniq([1, 2, 3, 3, 2, 1, 4, 5]));

var users = [
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

// Here we create a new propertie called fullName
_.forEach(users, function(user, index) {
  user.fullName = user.first + " " + user.last;
  console.log(user.fullName);
});

