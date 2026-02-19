let students = { A: [80, 90], B: [70, 75, 85] }

let heighestAvg = -Infinity;
let topper = ""


for(let student in students){
    let marks = students[student]
    
    let sum = 0;

    for(mark of marks){
        sum += mark;
    }

    let avg = sum / marks.length;
    if( avg > heighestAvg){
        heighestAvg = avg;
        topper = student
    }
}
console.log(topper);
