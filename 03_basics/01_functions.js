function sayMyName(){
  console.log("y");
  console.log("a");
  console.log("s");
  console.log("h");
  
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
   
// }
function addTwoNumbers(number1,number2){
   let result = number1 + number2
   //console.log("yash");
   return result
   
   
}
const result = addTwoNumbers(2,5)
// console.log("Result:",result);

function loginUserMessage(userName = "sam"){
  if(!userName){
    console.log("please enter a username");
    return
    
  }
  return `${userName} just logged in`
  
}
// console.log(loginUserMessage("yash"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1){
  return num1
}
// console.log(calculateCartPrice(200,400,600,5000));

const user = {
  username: "yash",
  price:1000
}
function handleObject(anyobject){
  //console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);

  
}
// handleObject(user)
handleObject({
  username:"sam",
  price: 999
})

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
  return getArray[2] 
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,600,800])); 


