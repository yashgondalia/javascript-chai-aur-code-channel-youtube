const marvel_heros = ["spiderman","thor","ironman"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[5,6,[7,8]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

//console.log(Array.isArray("hitesh"))
//console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

