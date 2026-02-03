let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
let result = {};

for(let count of fruits){
   if(result[count]) {
    result[count]++;   // IF apppers again
   } else {
    result[count] = 1; //1st time appears
   }
} 
console.log(result);
