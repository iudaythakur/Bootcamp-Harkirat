let sample = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
let output = []

// let newsample = [...sample.fruits , ...sample.veggies]  // when the data is small  and we knowes the key then this method is used 
// console.log(newsample);

for(let keys in sample){        //   when the data is large and we dont known the keys in object
    let arr = sample[keys]      // THis method is used in real life beacuse when we want data to merge data from the api
    for(let iteam of arr){ 
        output.push(iteam)
    }
}
console.log(output);
