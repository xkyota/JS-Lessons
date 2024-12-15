// const users = [
//     { id: 1, name: 'Олексій', age: 25 },
//     { id: 2, name: 'Марія', age: 30 },
//     { id: 3, name: 'Іван', age: 22 },
//     { id: 4, name: 'Ольга', age: 28 }
//   ];
  
//   users.forEach(user => {
//     console.log(`Користувач: ${user.name}, Вік: ${user.age}`);
//   });




// const users = [
//     {name: 'Олексій', age: 25},
//     {name: 'Марія', age: 30},
//     {name: 'Іван', age: 22},
//     {name: 'Ольга', age: 28}
// ]

// users.forEach(user => { console.log(`${user.name} - ${user.age}`) });

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((acc, number) => acc + number, 0);

console.log(sum);