"use strict";
// tsc
// tsc --watch
// cd dist          node index
// Basic Types
let id = 5;
let company = 'Social Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brand', false];
// Tuple Array
let employee;
employee = [
    [1, "Ali"],
    [2, "Abbas"],
    [3, "Hamza"],
];
// Union
let pid;
pid = '22'; // or it can be pid = 22
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log("Direction1 :" , Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion (custom data type)
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log("Function adding 2 numbers :" , addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
    // ! we haven't define the Age here 
    email: "lala@gmail.com"
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes -> this is OOP concept so you can change the class type 
// public, private, protected,,,, right now default it is public
//! class Person implements PersonInterface {
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
        //!    return 0      ----this is false
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(1, "Mike");
// console.log(brad, mike);
// console.log(brad.register());
// Extended Class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //! getting from parent class
        this.position;
        position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.name);
//! continue from 40:00
