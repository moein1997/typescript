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

    get milage() : number{
        return this._milage;
    }

    get age() : number{
        const date = new Date();
        return date.getFullYear() - this.year;
    }

    static get quantity() : number{
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

console.log("**************************************************************************");

class Shape{

    constructor(public width : number,public length : number){}

    sayHello(){
        console.log("Hello Friend");
    }

    calculateArea(){
        console.log("calculateArea method in shape class")
    }

    calculatePreimeter(){
        console.log("calculatePreimeter method in shape class")
    }
};

class Rect extends Shape{
    constructor(width : number , length : number, public color : string){
        super(width,length)
    }

    getColor(){
        return this.color;
    }

    override calculateArea() : number{
        console.log("calculateArea method in Rect class");
        return this.width * this.length;
    }

    override calculatePreimeter() : number{
        console.log("calculatePreimeter method in Rect class");
        return (this.width + this.length)*2;
    }
};

console.log("**************************************************************************");

const shape = new Shape(10,5);

shape.calculateArea();

shape.calculatePreimeter();

console.log("**************************************************************************");


const rectang1 = new Rect(10,5,"red");

rectang1.sayHello();

rectang1.calculateArea();

rectang1.calculatePreimeter();

rectang1.getColor();

console.log("**************************************************************************");

class ElecticCar extends Car{
    constructor(
        title : string,
        year : number,
        speed : number,
        color : string,
        _milage : number = 0,
        public batteryCapacity : number
    ){
            super(
                title,
                year,
                speed,
                color,
                _milage
            )
        }

    override get info(): string {
        return `${super.info}
            battery capacity : ${this.batteryCapacity}
        `
    }
    
}

const teslaModelS = new ElecticCar("Tesla series S",2024,280,"Black",1000,20000);

console.log(teslaModelS.info);

console.log("**************************************************************************");

class GasCar extends Car{
    constructor(
        title : string,
        year : number,
        speed : number,
        color : string,
        _milage : number = 0,
        public fuelEconomy : number
    ){
            super(
                title,
                year,
                speed,
                color,
                _milage
            )
        }

    override get info(): string {
        return `${super.info}
            Fuel economy : ${this.fuelEconomy}
        `
    }
    
}

const MercedesS500 = new ElecticCar("Mercedes S 500",2024,280,"Black",1000,20000);

console.log(MercedesS500.info);

console.log("**************************************************************************");

const enum categ {
    hygiene = "hygiene",
    food = "food",
    electrical = "electrical"
}

abstract class ProductClass{
    constructor(
        private _discountPercentage : number,
        private _price : number,
        private _stock : number,
        private _maxDiscount : number,
        public title : string,
        public brand : string,
        public description : string,
        public category : categ,
        public image? : string,
    ){};

    get discount(): number{
        return this._discountPercentage;
    };
    
    get price() : number{
        return this._price;
    };

    set price(new_price : number){
        if(new_price >= 0){
            this.price = new_price
        }else{
            console.log("price can not be negative");
        }
    }

    get stock() : number{
        return this._stock;
    };

    set discount(newDiscount : number){
        this._discountPercentage = newDiscount;
    };

    get info() : string{
        return `
            title : ${this.title}\n
            brand : ${this.brand}\n
            category : ${this.category}\n
            description : ${this.description}\n
            stock : ${this._stock}\n
            price : ${this._price}\n
            discount : ${this._discountPercentage}\n
            image : ${this.image}\n
        `
    }

    get finalPrice() : number{
        const discount_amount = this._price * (this._discountPercentage/100)
        if(discount_amount < this._maxDiscount){
            return this._price - discount_amount;
        }else{
            return this._price - this._maxDiscount;
        }
    }
}

console.log("**************************************************************************");

class Hygiene extends ProductClass{
    constructor(
        discountPercentage : number,
        price : number,
        stock : number,
        maxDiscount : number,
        title : string,
        brand : string,
        description : string,
        category : categ,
        image? : string,
    ){
        super(
            discountPercentage,
            price,
            stock,
            maxDiscount,
            title,
            brand,
            description,
            category,
            image
        )
    }
}

console.log("**************************************************************************");

class Food extends ProductClass{
    constructor(
        public expireDate : Date,
        discountPercentage : number,
        price : number,
        stock : number,
        maxDiscount : number,
        title : string,
        brand : string,
        description : string,
        category : categ,
        image? : string,
    ){
        super(
            discountPercentage,
            price,
            stock,
            maxDiscount,
            title,
            brand,
            description,
            category,
            image
        )
    }

    override get info() : string{
        return `
            ${super.info}
            expire date : ${this.expireDate}
        `
    }
}

console.log("**************************************************************************");

abstract class ShapeNew{
    constructor(public color : string){}

    abstract calculateArea() : number;

    abstract calculatePerimeter() : number
}

class RectangleNew extends ShapeNew{
    constructor(public width : number, public height : number,color : string){
        super(color);
    }

    override calculateArea(): number {
        return this.height * this.width;
    }

    override calculatePerimeter(): number {
        return (this.width + this.height)*2;
    }
}

const rectangleNew = new RectangleNew(3,5,"green");

console.log("Area: ", rectangleNew.calculateArea());

console.log("Perimeter: ", rectangleNew.calculatePerimeter());

console.log("**************************************************************************");

class CircleNew extends ShapeNew{
    constructor(public radius : number, color : string){
        super(color);
    }
    override calculateArea(): number {
        return 3.141592 * (this.radius **2);
    }

    override calculatePerimeter(): number {
        return 2*3.141592*this.radius;
    }
}

const circleNew = new CircleNew(4,"green");

console.log("Area: ", circleNew.calculateArea());

console.log("Perimeter: ", circleNew.calculatePerimeter());

console.log("**************************************************************************");

interface ShapeInterface {
    calculateArea() : number;
    calculatePerimeter() : number
}

interface ColorInterface {
    color : string;
    getColor() : string;
}

class Square implements ShapeInterface , ColorInterface{
    constructor(public color : string, public size : number){}
    calculateArea(): number {
        return this.size **2;
    }
    calculatePerimeter(): number {
        return 4*this.size; 
    }

    getColor() : string{
        return this.color;
    }
}

const square = new Square("red",3);

console.log("Area: ", square.calculateArea());

console.log("Perimeter: ", square.calculatePerimeter());

console.log("**************************************************************************");


interface CalculateShapeAreaAndPerimeterInterface {
    calculateArea() : number;
    calculatePerimeter() : number
}

interface ColorInterface {
    color : string;
    getColor() : string;
}

interface ShapeNewInterface extends CalculateShapeAreaAndPerimeterInterface , ColorInterface {

}

class SquareNew implements ShapeNewInterface{
    constructor(public color : string, public size : number){}
    calculateArea(): number {
        return this.size **2;
    }
    calculatePerimeter(): number {
        return 4*this.size; 
    }

    getColor() : string{
        return this.color;
    }
}

const squareNew = new Square("red",3);

console.log("Area: ", squareNew.calculateArea());

console.log("Perimeter: ", squareNew.calculatePerimeter()); 