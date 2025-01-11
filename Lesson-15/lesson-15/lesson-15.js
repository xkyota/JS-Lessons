// let numbers = [7, 2, 1];

// const sumOfNumbers = (array) => { 
//     let sum = 0; 
//     array.forEach(element => {
//         sum = sum + element; 
//     });
//     return sum
// }

// console.log(sumOfNumbers(numbers))


// const items = [
//     { id: 1, value: 10 },
//     { id: 2, value: 20 },
//     { id: 3, value: 30 },
//     { id: 4, value: 40 }
//   ];
  
//   const totalSum = items.reduce((sum, item) => {
//     return sum + item.value;
//   }, 0);
  
//   console.log("Загальна сума:", totalSum);
  

// const items = [
//     { id: 1, value: 10 },
//     { id: 2, value: 20 },
//     { id: 3, value: 30 },
//     { id: 4, value: 40 }
//   ];


// let totalSum = 0; 

// for (let i = 0; i < items.length; i++) {
//   totalSum += items[i].value; 
// }

// console.log(totalSum)



const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
  
//   const tags = tweets.reduce((allTags, tweet) => {
//     if(tweet.likes > 5){ 
//         allTags.push(...tweet.tags);
//     }
//     return allTags;
//   }, []);
  
  
//   console.log(tags);

// const tags = [];

// for (let i = 0; i < tweets.length; i++) {
//     const tweet = tweets[i];
//     for (let j = 0; j < tweet.tags.length; j++) {
//         tags.push(tweet.tags[j]);
//     }
// }


