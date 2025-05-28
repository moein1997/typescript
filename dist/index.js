"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hello_1 = __importDefault(require("./Hello"));
const functions_1 = require("./functions");
console.log("My name is Moein");
console.log("**************************************************************************");
let lname = "Azizi";
console.log(lname);
console.log("**************************************************************************");
(0, Hello_1.default)();
console.log("**************************************************************************");
(0, functions_1.test)("Moein");
console.log("**************************************************************************");
(0, functions_1.test)(2);
console.log("**************************************************************************");
const result = (0, functions_1.add)(6, 3);
console.log(result);
console.log("**************************************************************************");
const numbers = [1, 2, 3, 4];
numbers.push(5);
numbers.forEach(number => {
    console.log(number);
});
console.log("**************************************************************************");
const names = ["Moein", "Mahdi", "Nima"];
names.forEach(name => {
    console.log(name.toUpperCase());
});
console.log("**************************************************************************");
const user = ["Moein", 27];
console.log(user);
console.log(user[0]);
console.log(user[1]);
console.log("**************************************************************************");
;
console.log(0 /* UserType.Admin */);
console.log(1 /* UserType.User */);
console.log(2 /* UserType.CopyWriter */);
console.log("**************************************************************************");
;
console.log("admin" /* UserType_new.Admin */);
console.log("user" /* UserType_new.User */);
console.log("copywriter" /* UserType_new.CopyWriter */);
console.log("**************************************************************************");
const user_new = { name: "Moein", age: 27 };
console.log(user_new);
console.log("**************************************************************************");
const user_new_with_roll = { name: "Moein", age: 27, roll: "admin" /* UserType_new.Admin */ };
console.log(user_new_with_roll);
console.log("**************************************************************************");
const user_new_with_roll_new = {
    id: 1,
    name: "Moein",
    age: 27,
    roll: "admin" /* UserType_new.Admin */
};
console.log(user_new_with_roll_new);
user_new_with_roll_new.id = 2;
console.log("**************************************************************************");
const user_new_with_roll_new_const_id = {
    id: 1,
    name: "Moein",
    age: 27,
    roll: "admin" /* UserType_new.Admin */
};
console.log(user_new_with_roll_new_const_id);
// user_new_with_roll_new_const_id.id = 2     // This will cause error because of readonly
console.log("**************************************************************************");
console.log((0, functions_1.calculateArea)(20, 3));
console.log("**************************************************************************");
console.log((0, functions_1.calculateArea)(3, 20));
console.log("**************************************************************************");
console.log((0, functions_1.function_with_optional_input)(3));
console.log("**************************************************************************");
console.log((0, functions_1.convertMileToKilometer)(1));
console.log("**************************************************************************");
console.log((0, functions_1.convertMileToKilometer)("1.6"));
console.log("**************************************************************************");
const machine1 = {
    wash: () => {
        console.log("washing");
    }
};
machine1.wash();
console.log("**************************************************************************");
const machine2 = {
    dry: () => {
        console.log("drying");
    }
};
machine2.dry();
console.log("**************************************************************************");
const machine3 = {
    wash: () => {
        console.log("washing");
    },
    dry: () => {
        console.log("drying");
    }
};
machine3.wash();
machine3.dry();
console.log("**************************************************************************");
const order = {
    price: 10.99,
    status: "pending"
};
console.log(order);
console.log("**************************************************************************");
console.log((0, functions_1.putInArray)(2));
console.log((0, functions_1.putInArray)("Moein"));
console.log((0, functions_1.putInArray)(true));
console.log((0, functions_1.putInArray)({ title: "test" }));
console.log("**************************************************************************");
const array = (0, functions_1.putInArray)("Moein");
const res = array.map(element => {
    return element.toUpperCase();
});
console.log(res);
console.log("**************************************************************************");
const rectangle = {
    width: 10,
    length: 20,
    calculateArea() {
        return this.length * this.width;
    },
    calculatePerimeter() {
        return (this.width + this.length) * 2;
    },
};
console.log(rectangle);
console.log("**************************************************************************");
class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        return this.width * this.length;
    }
    calculatePerimeter() {
        return (this.width + this.length) * 2;
    }
}
const rect1 = new Rectangle(5, 7);
console.log(rect1.calculateArea());
console.log(rect1.calculatePerimeter());
console.log(rect1);
console.log("**************************************************************************");
class Product {
    constructor(title, price, discount, stock) {
        this.title = title;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
    }
    getFinalPrice() {
        const discountedAmount = (this.price * this.discount) / 100;
        return this.price - discountedAmount;
    }
}
const mobile = new Product("iphone 16 pro max", 1199, 3, 159);
console.log(mobile.getFinalPrice());
console.log("**************************************************************************");
class ProductNew {
    constructor(category, title, price, discount, _stock) {
        this.category = category;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this._stock = _stock;
    }
    getFinalPrice() {
        const discountedAmount = (this.price * this.discount) / 100;
        return this.price - discountedAmount;
    }
    getStock() {
        return this._stock;
    }
}
const mobile_new = new ProductNew("phone" /* Category.phone */, "iphone 16 pro max", 1199, 3, 159);
console.log(mobile_new.getFinalPrice());
console.log("**************************************************************************");
console.log(mobile_new);
// mobile_new.category = Category.laptop; //this will cause error because category is readonly
// mobile_new.stock = 150; //this will cause error because stock is private
mobile_new.getStock();
console.log("**************************************************************************");
class ProductNew_format {
    constructor(category, title, price, discount, _stock, image, inSale = false) {
        this.category = category;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this._stock = _stock;
        this.image = image;
        this.inSale = inSale;
        this.category = category;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this._stock = _stock;
    }
    getFinalPrice() {
        const discountedAmount = (this.price * this.discount) / 100;
        return this.price - discountedAmount;
    }
    get stock() {
        return this._stock;
    }
    set stock(newStock) {
        if (newStock >= 0) {
            this._stock = newStock;
        }
        else {
            console.log("stock can not be negative");
        }
    }
}
const mobile_new_format = new ProductNew_format("phone" /* Category.phone */, "iphone 16 pro max", 1199, 3, 159);
console.log(mobile_new_format.getFinalPrice());
console.log("**************************************************************************");
console.log(mobile_new_format);
// mobile_new.category = Category.laptop; //this will cause error because category is readonly
// mobile_new.stock = 150; //this will cause error because stock is private
mobile_new_format.stock;
mobile_new_format.stock = 2;
console.log("**************************************************************************");
class Car {
    constructor(title, year, speed, color, _milage = 0) {
        this.title = title;
        this.year = year;
        this.speed = speed;
        this.color = color;
        this._milage = _milage;
        Car._quantity++;
    }
    get info() {
        return `
            Car name is: ${this.title} \n
            Car year is : ${this.year} \n
            Car speed is : ${this.speed} \n
            car color is : ${this.color} \n
            car milage is : ${this._milage}
            `;
    }
    set milage(newMilage) {
        if (newMilage >= 0) {
            this._milage = newMilage;
        }
        else {
            throw Error("Milage can not be negative");
        }
    }
    get milage() {
        return this._milage;
    }
    get age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
    static get quantity() {
        return Car._quantity;
    }
}
Car._quantity = 0;
const BMW_X4 = new Car("BMW_X4", 2024, 280, "Black");
console.log(BMW_X4.info);
BMW_X4.milage = 20;
console.log("********************************");
console.log(BMW_X4.age);
console.log("********************************");
console.log(BMW_X4.info);
console.log("**************************************************************************");
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Circle.PI * (this.radius ** 2);
    }
}
Circle.PI = 3.141592;
const circ1 = new Circle(10);
console.log(circ1);
console.log("**************************************************************************");
const car1 = new Car("car1", 2024, 280, "Black");
const car2 = new Car("car1", 2024, 280, "Black");
const car3 = new Car("car1", 2024, 280, "Black");
const car4 = new Car("car1", 2024, 280, "Black");
console.log(Car.quantity);
console.log("**************************************************************************");
class Shape {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    sayHello() {
        console.log("Hello Friend");
    }
    calculateArea() {
        console.log("calculateArea method in shape class");
    }
    calculatePreimeter() {
        console.log("calculatePreimeter method in shape class");
    }
}
;
class Rect extends Shape {
    constructor(width, length, color) {
        super(width, length);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    calculateArea() {
        console.log("calculateArea method in Rect class");
        return this.width * this.length;
    }
    calculatePreimeter() {
        console.log("calculatePreimeter method in Rect class");
        return (this.width + this.length) * 2;
    }
}
;
console.log("**************************************************************************");
const shape = new Shape(10, 5);
shape.calculateArea();
shape.calculatePreimeter();
console.log("**************************************************************************");
const rectang1 = new Rect(10, 5, "red");
rectang1.sayHello();
rectang1.calculateArea();
rectang1.calculatePreimeter();
rectang1.getColor();
console.log("**************************************************************************");
class ElecticCar extends Car {
    constructor(title, year, speed, color, _milage = 0, batteryCapacity) {
        super(title, year, speed, color, _milage);
        this.batteryCapacity = batteryCapacity;
    }
    get info() {
        return `${super.info}
            battery capacity : ${this.batteryCapacity}
        `;
    }
}
const teslaModelS = new ElecticCar("Tesla series S", 2024, 280, "Black", 1000, 20000);
console.log(teslaModelS.info);
