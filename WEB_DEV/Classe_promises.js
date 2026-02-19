// class is a blueprint ---> where you difine funtions in objects 
// JS have in bulit classes like ---> new date()
// constructure ----> is where you define the instance of class
// new ---> create a instance of class


class rectangle {
    constructor(lenght , width , color) {
        this.width = width;
        this.length = lenght;
        this.color = color
    }

    area(){
        let area = this.width * this.length
        return area;
    }

    perimeter(){
        return 2 * (this.length + this.width)
    }
}

const react = new rectangle(3 ,4 ,"red") // Here we  call the instance of the classs
const perimeter = react.perimeter()
console.log(react.area());
console.log(perimeter);


