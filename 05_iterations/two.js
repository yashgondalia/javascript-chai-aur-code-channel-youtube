// let index = 0
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//   index = index +2
// }

// let myArray = ['flash','batman','superman']
// let arr = 0
// while (arr < myArray.length) {
//   console.log(`value is ${myArray[arr]}`);
//   arr = arr +1
// }

let score = 11

// do {
//   console.log(`score is ${score}`);
//   score++
// } while (score <=10);

const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num);
  
}

// const greetings = "hello world"
// for (const greet of greetings) {
//   // console.log(`each character is ${greet}`);
  
// }


const map = new Map()
map.set("IN","India")
map.set("USA","United states of America")
map.set("Fr","France")

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
  
}
