//singleton
// object.create

const mySym = Symbol("key1")

const JsUser = {
  name: "yash",
  "full name": "Yash Gondalia",
  [mySym]: "mykey1",
  age:18, 
  email: "yash@google.com",
  location: "Mumbai",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "yash@chatgpt.com"
//console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser.email = "yash@yash.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
  console.log("Hello JS user");
  
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user ${this.name}`);
  
}
console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());



