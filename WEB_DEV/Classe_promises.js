// class is a blueprint ---> where you difine funtions in objects
// JS have in bulit classes like ---> new date()
// constructure ----> is where you define the instance of class
// new ---> create a instance of class
// In classes the objects are different from the objects defined in the last section

// JavaScript does 4 steps internally:

// Creates empty object {}

// Sets prototype

// Binds this to that object

// Returns object

// This is how new works internally.

// Simple way to declare the classes in java script

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`${this.name} is my name and my age is ${this.age}`);
  }
}

const uday = new user("Uday", 20).greet();
// const uday = new user("Uday", 20);
console.log(uday);

/**📌 Key Features

Created through a blueprint (class).

Structure is fixed: constructor + methods.

Methods are stored in prototype, NOT copied in every object.

Good for large applications.

📌 Memory Structure

When you create an object from a class:

Properties (this.name) are stored in the instance.

Methods (greet()) are NOT stored in the instance.

They come from User.prototype.

So if you create 10 instances, they SHARED only 1 method in memory.

This is more efficient and scalable. */

class rectangle {
  constructor(lenght, width, color) {
    this.width = width;
    this.length = lenght;
    this.color = color;
  }

  area() {
    return this.width * this.length;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

const react = new rectangle(3, 4, "red"); // Here we  call the instance of the classs   // Means in the background the 1> empty object is created 2> Set the protoypes 3> bind this to the object 4> return objects
const perimeter = react.perimeter();
console.log(react.area());
console.log(perimeter);

class square {
  constructor(side, color) {
    this.side = side;
    this.color = color;
  }
  area() {
    return this.side * this.side;
  }
  perimeter() {
    return 4 * this.side * this.side;
  }
  paint() {
    return console.log(`${this.color} is the color of the square`);
  }
}

let s1 = new square(3, "red");
let perimeter1 = s1.perimeter();
console.log(s1.area());
console.log(perimeter1);
console.log(s1.paint());

// Priomises

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise?utm_source=chatgpt.com

//https://media2.dev.to/dynamic/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frywxmm88tzejejqhr8pg.png

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const { log } = require("console");
// function callback() {
//   console.log("3 Seconds are passed");
// }
// setTimeoutPromisified(3000).then(callback)  // Promisifed version

// callbackversion = settimeout(callback, 3000)

// By using call backs
// const fs = require("fs");
// function callback(err, data) {
//   if (err) {
//     console.log("error while reading the file");
//   } else {
//     console.log(data);

//   }
// }
// fs.readFile("a1.txt", "utf-8", callback)
// .then(callback)

// BY USing promise class





// How to call a promisifed function
const fs = require("fs");
const { RetryAgent } = require("undici-types");

function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

 function callback(err, data) {
  if (err) {
    console.log("error while reading the file");
  } else {
    console.log(data);

  }
}

function callbackerr(){
  console.log("error while reading the file");
}


fsReadFilePromisified("a1.txt" , "utf-8")
.then(callback)  // .then will get called if every thing got right
.catch(callbackerr) // .catch will call the function which is inside if any goes wrong

//  In a promisifed function we can give the 2 call backs a succes and error callback

/**
 *  class Promise {
 *     constructor() {
 *     
 *     }
 *       then() {}
 *     catch(){}
 *   }
 */


// In the simple call back the call back hell was created 
// Call back means the code was going to right side 

// Function call back hell 
// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });


// How promisifed functions resolves the callback hell
// THis is known as promise chaning 
setTimeoutPromisified(1000)
.then(function () {
  console.log("Hi");
  return setTimeoutPromisified(3000);
})
.then(function () {
  console.log("Hello");
  return setTimeoutPromisified(5000);
})
.then(function(){
  console.log("My Name is Uday");
})