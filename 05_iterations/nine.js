const Nums = [1,2,3]

// const myTotal = Nums.reduce(function(acc,currval){
//       console.log(`acc value is ${acc} and currval is ${currval}`);
      
//       return acc + currval;
// },0)

const myTotal = Nums.reduce((acc,currval) => acc+currval,0 )
console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'js course',
    price: 2999
  },
  {
    itemName: 'mobile dev',
    price: 5999
  },
  {
    itemName: 'data science',
    price: 12999
  },

  
]

const priceToPay = shoppingCart.reduce((acc, item)=>  acc + item.price,0 )
console.log(priceToPay);

