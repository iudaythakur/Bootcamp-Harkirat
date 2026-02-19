let myobj = { x: [1,2,3], y: [2,3,4], z: [4,5] }

let newobj = [...myobj.x , ...newobj.y , ...newobj.z] 
console.log(newobj);

