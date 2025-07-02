let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025,4,25,3,4)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleTimeString());

let myTimeStamp = Date.now()




// console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('Default',{
  weekday: "long",
})

