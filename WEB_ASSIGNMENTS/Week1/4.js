const u = { a: 100, b: 30, c: 20 }
let maxkey = ""
let maxval = -Infinity
for(let keys in u ){
    if(u[keys]  > maxval){
        maxval = u[keys]
        maxkey = keys;
    }
}
console.log(maxkey);
