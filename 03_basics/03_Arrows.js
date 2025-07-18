const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function(){
  console.log(` ${this.username}, welcome to the website`);
  console.log(this);
  
  
  }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "yash"
//   console.log(this.username);
  
// }
// chai()

// const chai = function () {
//    let username = "yash"
//   console.log(this.username);
  
// }
// chai()

const chai =  () => {
   let username = "yash"
  console.log(this.username);
  
}
// chai()

// const addTwo = (num1,num2) => {
//   return num1 + num2

// }
// console.log(addTwo(2,3))

// const addTwo = (num1,num2) => ({username:"hitesh"})


// console.log(addTwo(2,3))

// (function chai(){
//   console.log(`DB CONNECTED`);
  
// })();

// ((name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
  
// })("hitesh")


let val1 = 10
let val2 = 5

function addnum() {
  let total = num1 + num2
  return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)