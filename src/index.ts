import sayHello from "./Hello";

import {test,add,calculateArea,function_with_optional_input,convertMileToKilometer,putInArray} from "./functions";

console.log("My name is Moein");

console.log("**************************************************************************");

let lname : string = "Azizi";

console.log(lname);

console.log("**************************************************************************");

sayHello();

console.log("**************************************************************************");

test("Moein");

console.log("**************************************************************************");

test(2);

console.log("**************************************************************************");

const result : number = add(6,3);

console.log(result);

console.log("**************************************************************************");

const numbers : number[] = [1,2,3,4]

numbers.push(5);

numbers.forEach(number => {
    console.log(number);
});

console.log("**************************************************************************");

const names : string[] = ["Moein","Mahdi","Nima"];

names.forEach(name=>{
    console.log(name.toUpperCase());
});

console.log("**************************************************************************");

const user : [string,number] = ["Moein",27];

console.log(user);

console.log(user[0]);

console.log(user[1]);

console.log("**************************************************************************");

const enum UserType {
    Admin,
    User,
    CopyWriter
};

console.log(UserType.Admin);
console.log(UserType.User);
console.log(UserType.CopyWriter);

console.log("**************************************************************************");

const enum UserType_new {
    Admin = "admin",
    User = "user",
    CopyWriter = "copywriter"
};

console.log(UserType_new.Admin);
console.log(UserType_new.User);
console.log(UserType_new.CopyWriter);

console.log("**************************************************************************");

const user_new : {name : string,age : number} = {name : "Moein",age : 27};

console.log(user_new);

console.log("**************************************************************************");

const user_new_with_roll : {name : string,age : number, roll : UserType_new} = {name : "Moein",age : 27, roll : UserType_new.Admin};

console.log(user_new_with_roll);

console.log("**************************************************************************");

const user_new_with_roll_new : {
    id : number,
    name : string,
    age : number,
    roll : UserType_new
} = {
id : 1,
name : "Moein",
age : 27,
roll : UserType_new.Admin
};

console.log(user_new_with_roll_new);

user_new_with_roll_new.id = 2

console.log("**************************************************************************");

const user_new_with_roll_new_const_id : {
    readonly id : number,
    name : string,
    age : number,
    roll : UserType_new
} = {
id : 1,
name : "Moein",
age : 27,
roll : UserType_new.Admin
};

console.log(user_new_with_roll_new_const_id);

// user_new_with_roll_new_const_id.id = 2     // This will cause error because of readonly

console.log("**************************************************************************");

console.log(calculateArea(20,3));

console.log("**************************************************************************");

console.log(calculateArea(3,20));

console.log("**************************************************************************");

console.log(function_with_optional_input(3));

console.log("**************************************************************************");

console.log(convertMileToKilometer(1));

console.log("**************************************************************************");

console.log(convertMileToKilometer("1.6"));

console.log("**************************************************************************");

type Washer = {wash : () => void};

type Dryer = {dry : ()=> void};

const machine1 : Washer = {
    wash : () : void=>{
        console.log("washing");
    }
}

machine1.wash()

console.log("**************************************************************************");

const machine2 : Dryer = {
    dry : () : void=>{
        console.log("drying");
    }
}

machine2.dry()

console.log("**************************************************************************");

const machine3 :Washer & Dryer = {
    wash : () : void=>{
        console.log("washing");
    },
    dry : () : void=>{
        console.log("drying");
    }
}

machine3.wash();
machine3.dry();

console.log("**************************************************************************");

type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {price : number, status : OrderStatus};

const order : Order = {
    price : 10.99,
    status : "pending"
}

console.log(order);

console.log("**************************************************************************");

console.log(putInArray<number>(2));
console.log(putInArray<string>("Moein"));
console.log(putInArray<boolean>(true));
console.log(putInArray<{title : string}>({title : "test"}));

console.log("**************************************************************************");

const array = putInArray<string>("Moein");

const res = array.map(element =>{
    return element.toUpperCase();
});

console.log(res);

console.log("**************************************************************************");

const rectangle = {
    width : 10,
    length : 20,

    calculateArea(){
        return this.length * this.width;
    },

    calculatePerimeter(){
        return (this.width + this.length)*2
    },
}

console.log(rectangle)

console.log("**************************************************************************");

class Rectangle {
    width : number;
    length : number;

    constructor( width : number,length : number){
        this.width = width;
        this.length = length;
    }

    calculateArea() : number{
        return this.width * this.length;
    }

    calculatePerimeter() : number{
        return (this.width + this.length)*2;
    }
}

const rect1 = new Rectangle(5,7);

console.log(rect1.calculateArea());

console.log(rect1.calculatePerimeter());

console.log(rect1);

console.log("**************************************************************************");

class Product {
    title : string

    price : number

    discount : number

    stock : number

    constructor(title : string,price : number,discount : number,stock : number){
        this.title = title;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
    }

    getFinalPrice() : number{
        const discountedAmount = (this.price * this.discount)/100;

        return this.price - discountedAmount;
    }
}

const mobile = new Product("iphone 16 pro max", 1199,3,159);

console.log(mobile.getFinalPrice());

console.log("**************************************************************************");

const enum Category {
    phone = "phone",
    laptop  = "laptop",
    tablet = "tablet"
}

class ProductNew {
    readonly category : Category;

    title : string;

    price : number;

    discount : number;

    private _stock : number;

    constructor(category : Category, title : string,price : number,discount : number,_stock : number){
        this.category = category;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this._stock = _stock;
    }

    getFinalPrice() : number{
        const discountedAmount = (this.price * this.discount)/100;

        return this.price - discountedAmount;
    }

    getStock() : number{
        return this._stock
    }
}

const mobile_new = new ProductNew(Category.phone,"iphone 16 pro max", 1199,3,159);

console.log(mobile_new.getFinalPrice());

console.log("**************************************************************************");

console.log(mobile_new);

// mobile_new.category = Category.laptop; //this will cause error because category is readonly

// mobile_new.stock = 150; //this will cause error because stock is private

mobile_new.getStock();

console.log("**************************************************************************");

class ProductNew_format {

    constructor(public readonly category : Category, public title : string, public price : number,public discount : number,private _stock : number,public image? : string,public inSale : boolean = false){
        this.category = category;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this._stock = _stock;
    }

    getFinalPrice() : number{
        const discountedAmount = (this.price * this.discount)/100;

        return this.price - discountedAmount;
    }

    get stock() : number{
        return this._stock
    }

    set stock(newStock : number){
        if(newStock >=  0){
            this._stock = newStock;
        }else{
            console.log("stock can not be negative")
        }
    }
}

const mobile_new_format = new ProductNew_format(Category.phone,"iphone 16 pro max", 1199,3,159);

console.log(mobile_new_format.getFinalPrice());

console.log("**************************************************************************");

console.log(mobile_new_format);

// mobile_new.category = Category.laptop; //this will cause error because category is readonly

// mobile_new.stock = 150; //this will cause error because stock is private

mobile_new_format.stock;

mobile_new_format.stock = 2

console.log("**************************************************************************");

class Car {
    private static _quantity : number = 0
    constructor(
        public title : string,
        public year : number,
        public speed : number,
        public color : string,
        private _milage : number = 0
    ) {
        Car._quantity ++;
    }

    get info() : string{
        return `
            Car name is: ${this.title} \n
            Car year is : ${this.year} \n
            Car speed is : ${this.speed} \n
            car color is : ${this.color} \n
            car milage is : ${this._milage}
            `
    }

    set milage(newMilage : number){
        if(newMilage >=0 ){
            this._milage = newMilage;
        }else{
            throw Error("Milage can not be negative");
        }
    }

    get age() : number{
        const date = new Date();
        return date.getFullYear() - this.year;
    }

    get quantity() : number{
        return Car._quantity;
    }
}

const BMW_X4 = new Car("BMW_X4",2024,280,"Black");

console.log(BMW_X4.info);

BMW_X4.milage = 20;

console.log("********************************");

console.log(BMW_X4.age)

console.log("********************************");

console.log(BMW_X4.info);

console.log("**************************************************************************");

class Circle{
    static PI : number = 3.141592;
    constructor(public radius : number){

    }

    getArea() : number{
        return Circle.PI * (this.radius**2);
    }
}

const circ1 = new Circle(10);

console.log(circ1);

console.log("**************************************************************************");

const car1 = new Car("car1",2024,280,"Black");
const car2 = new Car("car1",2024,280,"Black");
const car3 = new Car("car1",2024,280,"Black");
const car4 = new Car("car1",2024,280,"Black");

console.log(Car.quantity);