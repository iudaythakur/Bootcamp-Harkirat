list = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
let result = {};

for(let key in list){
   let sum = list[key].reduce((acc , cur) => acc + cur , 0)
   result[key] = sum
} 
console.log(result);
