// const hotel = {
//     hotelName: 'Resort Hotel',
//     stars: 5,
//     hotelStatus: 100,
//   };
 
//   Оголосимо змінні і дамо їм значення з об'єкта
//   const { hotelName, stars, hotelStatus } = hotel;
 
//   console.log(hotelName, stars, hotelStatus);



// const fruits = {
//     apple: 5,
//     orange: 10,
//     banana: 15,
//   };
 
//   const { apple, orange, banana } = fruits;
 
//   console.log(apple, orange, banana);



// console.log({hotelName, stars, hotelStatus});


// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
 
//   const { name, ...rest } = hotel;
 
//   console.log(name);
//   console.log(rest);



//   const {...hotelInf} = hotel;

//     console.log(hotelInf);

  





    // const nestedHotel = {
    //     name: 'Resort Hotel',
    //     stars: 5,
    //     capacity: 100,
    //     address: {
    //         street: '123 Main St',
    //         city: 'Somewhere',
    //         country: 'Neverland'
    //     }, 
    //     guests: ['Alice', 'Bob', 'Charlie']
    // };

    // const { name: hotelName, address: { street, city, country }, guests:[oksana1, oksana2, oskana3] } = nestedHotel;
    

    // console.log(hotelName);
    // console.log(street); 
    // console.log(city); 
    // console.log(country); 
    // console.log(oksana1);
    // console.log(oksana2);
    // console.log(oskana3);




    
// function personInfo(person) { 
//     const {name, surname, age} = person; 
//     return `My name is ${name} ${surname} is ${age} years old`;
// }

// person1 = {
//     name: 'Oksana',
//     surname: 'Koval',
//     age: 25,
// }

// console.log(personInfo(person1));



// Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента 
// (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення середньої оцінки студента.
// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };
 
//   console.log(calculateAverageGrade(student));







// function calculateAverage(person){ 
//     let sum = 0;
//     const grades = person.grades; 
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i];
//     }
//     average = sum / grades.length;
//     return average;
// }


// const person = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };


// console.log(calculateAverage(person));


// const grades = student.grades;
// let sum = 0;
// for (let index = 0; index < grades.length; index++) {
//     sum = sum + grades[index]; 
// }
// average = sum / grades.length;

// console.log(average);


// function calculator(action){ 
//     const operators = ["+", "-", "*", "/", "**", "%", "sqrt", "!", "abs", "round", "floor", "ceil"];
    
//     const regexSplitFinder = /\+|-|\*{1,2}|\/|%|sqrt|!|abs|round|floor|ceil/; 
//     const data = action.split(regexSplitFinder);
    

//     const usedOperator = action.match(regexSplitFinder)?.[0];
    

//     if (operators.includes(usedOperator)) {
//         switch (usedOperator) {
//             case "+":
//                 return +data[0] + +data[1];
//             case "-":
//                 return +data[0] - +data[1];
//             case "*":
//                 return +data[0] * +data[1];
//             case "/":
//                 return +data[0] / +data[1];
//             case "**":
//                 return (+data[0]) ** (+data[1]);
//             case "%":
//                 return +data[0] % +data[1];
//             case "sqrt":
//                 return Math.sqrt(+data[0]);
//             case "!":
//                 return factorial(+data[0]);
//         }
//     } else {
//         return "Invalid operator";
//     }
// }

// console.log(calculator(""));



//! Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];


// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }


// console.log(filteredNumbers); 

//! Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });


// console.log(filteredNumbers); // [4, 5]

// const mynums = [1, 2,  2343, 12312]; 

// const evenNumbers = mynums.filter(value => {
//     return value % 2 == 0; 
// });

// console.log("Even numbers: " + evenNumbers);


// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// odd = []; 
// even = [];

// numbers.forEach(element => {
//     if (element % 2 == 0) {
//         even.push(element);
//     }
//     else{ 
//         odd.push(element);
//     }
// });

// console.log("Even: " + even);
// console.log("Odd: " + odd);



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = numbers.map(value => {
//     if (value % 2 == 0) {
//         return value;
//     } else {
//         return value * 3 + 1;
//     }
// });

// console.log("Before sort:", even);

// even.sort((a, b) => a - b);

// console.log("After sort:", even);



