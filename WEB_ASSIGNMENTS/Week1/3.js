const input = { a: "x", b: "y", c: "z" }
const output = {};

for(let keys in input){
    let values = input[keys]
    output[values] = keys
}
console.log(output);
