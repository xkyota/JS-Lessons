// Створіть об'єкт "person" з властивостями "name", "age", "gender". 
// Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

// let person = {
//     name: "Maksym", 
//     age: 15, 
//     gender: "man", 
// } 

// console.log(person);


let userName = "Maksym" 

let userAge = 15; 

let userGender = "man"

// - Додайте метод до об'єкта person

let person = {
    userName, 
    userAge,
    userGender,
    describePerson: function() {
        console.log(`Name: ${this.userName}, Age: ${this.user}, Gender: ${this.userGender}`);
    } 
}

person.describePerson(); 




// - Створіть метод (функцію) всередині об'єкта person, який буде виводити на екран (в консолі) всі його властивості.

// - Назвіть цей метод describePerson. Він не приймає параметрів, але використовує значення властивостей об'єкта.
// Викличте метод describePerson




// - Після створення методу в об'єкті, використовуйте його, щоб вивести повідомлення з інформацією про особистість.



// - Для цього викличте person.describePerson();

