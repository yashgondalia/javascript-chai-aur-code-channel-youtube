// primitive

//7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//  console.log(id === anotherId);

//const bigNumber = 234567867546767567456574n

//Refrence(Non Proimitive)

//Array,Objects,Functions
const heros = ["shaktiman","nagraj","doga"]
let myObj = {
  name: "yash",
  age: 22,
}

const myFunction = function() {
  //console.log("hello world");
  
}
//console.log(typeof bigNumber);
//console.log(typeof outsideTemp);
//console.log(typeof anotherId);


//*********************************************************************

// Stack(Primitive), Heap(Non-Primitive)

let myYoutube = "yashgondalia"

let anotherName = myYoutube
anotherName  = "yeah"

//console.log(myYoutube);

//console.log(anotherName);

 let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
 }
 let userTwo = userOne 

 userTwo.email = "yashgondalia@123"

 console.log(userOne.email);
 console.log(userTwo.email);
 

 
