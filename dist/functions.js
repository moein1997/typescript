"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putInArray = exports.convertMileToKilometer = exports.function_with_optional_input = exports.calculateArea = exports.add = exports.test = void 0;
const test = (value) => {
    if (typeof value === "string") {
        console.log(value);
    }
    else {
        console.log("value must be string");
    }
};
exports.test = test;
const add = (num1, num2) => {
    return num1 + num2;
};
exports.add = add;
const calculateArea = (width, height) => {
    if (width > height) {
        return width * height;
    }
    else {
        return width * height / 2;
    }
};
exports.calculateArea = calculateArea;
const function_with_optional_input = (width, height = 6) => {
    if (width > height) {
        return width * height;
    }
    else {
        return width * height / 2;
    }
};
exports.function_with_optional_input = function_with_optional_input;
const convertMileToKilometer = (value) => {
    if (typeof value === "string") {
        return parseFloat(value) * 1.6;
    }
    else {
        return value * 1.6;
    }
};
exports.convertMileToKilometer = convertMileToKilometer;
const putInArray = (value) => {
    return [value];
};
exports.putInArray = putInArray;
