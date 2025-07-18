//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
  email: "some@gmail.com",
  fullname:{
    userfullname:{
      firstname: "yash",
      lastname: "gondalia"
    }
  }

}
//console.log(regularUser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}//90 percent of the time you will use this syntax only
//  console.log(obj3);

const users = [
{
  id: 1,
  email: "yashj.com",
},
{
  id: 1,
  email: "yashj.com",
},
{
  id: 1,
  email: "yashj.com",
},


]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// // console.log(Object.length(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
  coursename:"js in hindi",
  price: "999",
  courseInstructor: "hitesh choudhary sir"
}

const{courseInstructor: instructor} = course

// console.log(course);
console.log(instructor);




