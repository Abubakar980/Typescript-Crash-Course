
// tsc
// tsc --watch

// cd dist          node index


// Basic Types
let id: number = 5
let company: string = 'Social Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brand', false]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, "Ali"],
    [2, "Abbas"],
    [3, "Hamza"],
]

// Union
let pid: string | number
pid = '22'  // or it can be pid = 22

// Enum
enum Direction1 {
    Up, Down, Left, Right
}
// console.log("Direction1 :" , Direction1.Up);

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left", 
    Right = "Right"
}
// console.log("Direction2 :" ,Direction2.Up);

// Objects 
type User = {
    id: number
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion (custom data type)
let cid: any = 1
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
// console.log("Function adding 2 numbers :" , addNum(1, 2));


function log(message: string | number): void{
    console.log(message);
}
// log("Message : This is function output")
// log(23)


// Interfaces
interface UserInterface {
    id: number
    name: string
    age?: number // ? is for making it optional
    readonly email: string // ! (This is only for making the property readonly) 
}

const user1: UserInterface = {
    id: 1,
    name: "John",
    // ! we haven't define the Age here 
    email: "lala@gmail.com"
}
// user1.email = "hehe@gmail.com"

// ! You can't use interfaces in unions
// * Ex 1 True
type Point = number | string
const p1: Point = 1
// * Ex 2 False
// interface Points = number | string
// const p2: Point = 1


// Functions
interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y



interface PersonInterface {
    id: number
    name: string
    register(): string   //! you set the return type to STRING
}
// Classes -> this is OOP concept so you can change the class type 
// public, private, protected,,,, right now default it is public
//! class Person implements PersonInterface {
class Person {
    // private id: number
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    //!    return 0      ----this is false
    }
}

const brad = new Person(1, "Brad")
const mike = new Person(1, "Mike")
// console.log(brad, mike);
// console.log(brad.register());


// Extended Class
// class Employee extends Person {
//     position: string

//     constructor(id: number, name: string, position: string){
//         super(id, name)   //! getting from parent class
//         this.position: position
//     }
// }

// const emp = new Employee(3, "Shawn", "Developer")

// console.log(emp.name);


//! continue from 40:00