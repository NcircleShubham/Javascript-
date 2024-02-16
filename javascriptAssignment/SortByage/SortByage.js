const users = [
  { name: "user 1", age: 14.5 },
  { name: "user 2", age: 10 },
  { name: "user 3", age: 22.2 },
  { name: "user 4", age: 9 },
  { name: "user 5", age: 38 }
];

// Task 1: Find set of people with age less than 20
const under20 = users.filter(user => user.age < 20);
console.log("People with age less than 20:", under20);

// Task 2: Add new element “id” for each user in given array
const usersWithId = users.map((user, index) => ({ ...user, id: index + 1 }));
console.log("Array with 'id' added:", usersWithId);

// Task 3: Sort array on the basis of user’s age
const sortedByAge = usersWithId.sort((a, b) => a.age - b.age);
console.log("Array sorted by age:", sortedByAge);

// Task 4: Round all the ages of users and display the sum
const roundedAges = usersWithId.map(user => ({ ...user, age: Math.round(user.age) }));
const sumOfAges = roundedAges.reduce((sum, user) => sum + user.age, 0);
console.log("Rounded ages:", roundedAges);
console.log("Sum of rounded ages:", sumOfAges);

// Display the data on the browser
document.getElementById('output').innerHTML = `
  <p>People with age less than 20: ${JSON.stringify(under20)}</p>
  <p>Array with 'id' added: ${JSON.stringify(usersWithId)}</p>
  <p>Array sorted by age: ${JSON.stringify(sortedByAge)}</p>
  <p>Rounded ages: ${JSON.stringify(roundedAges)}</p>
  <p>Sum of rounded ages: ${sumOfAges}</p>
`;
