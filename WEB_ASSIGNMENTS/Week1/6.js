const myarr = [
  { name: "uday", city: "Delhi" },
  { name: "amit", city: "Mumbai" },
  { name: "thor", city: "Delhi" }
]
 
let result = {}

for(let value of myarr){
    let city = value.city;
    let name = value.name

    if(!result[city]){
    result[city] = [];
} 
        
}