//Practicing ES6
//Working with JS Let 
var x = 10;
{
    let x = 2;
    console.log('Inside block ' + x);
}


//Workin with Const Keyword
console.log('Outside Block ' + x);
const y = 5;
{
    // y=2; //error
    //when using const keyword we cannot change the value of Y
    console.log('const: ' + y);
}


//Working with Arrow Function
a_test = () => "Simplae arrow function call";
console.log(a_test())//Simplae arrow function call

a_test2 = (a, b) => a > b;
console.log(a_test2(3, 1)) //true


//For/Of loop
const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let text = "";

for (let x of arr) {
    text += x + " ";
}
console.log(arr) //(13) [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]


//Working with JS Map
const person1 = { name: 'Anto' };
const person2 = { name: 'Jerold' };
const person3 = { name: 'Antony' };

const person = new Map();
person.set(person1, 27)
console.log(person)//Map(1) {{name: 'Anto'} => 27}


//Working with Java Script Set
const letters = new Set(arr);
console.log(letters) //Set(5) {3, a, 2, 4, 9}


//Working With Class
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


//Creating a object
const obj = new user("Antony ", "is a Programmer");
console.log(obj.name + obj.age) //Antony is a Programmer


//Working with JS Promise
let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("Antony Jerol J"); }, 3000);
});
console.log('The Best developer of the Month is: ')
myPromise.then(function (value) {
    console.log(value) //Executed after 3 MS 'Antony Jerold J' 
});


//Working With Symbols
const person5 =
{
    name: "Antony",
    age: 21,
};

let id = Symbol('id');
person5[id] = 2000;
console.log(person5) //{name: 'Antony', age: 21, Symbol(id): 2000}


//Working with Function default Parameter
function myFunction(x, y = 100) {
    return x + y;
}
console.log(myFunction(50)) // 150


//Working with Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(sum(arr)) //03,a,a,a,2,3,a,3,a,2,4,9,3


//ES6 String operations
var text = "Antony Squashapps";
console.log(text)
console.log(text.includes("Antony")) //true
console.log(text.endsWith("Squashapps")) //true
console.log(text.startsWith("Hello")) // false

var open = Array.from(text)
console.log(open) //(17) ['A', 'n', 't', 'o', 'n', 'y', ' ', 'S', 'q', 'u', 'a', 's', 'h', 'a', 'p', 'p', 's' ]


//ES6 Array operation
const numbers = [4, 9, 16, 25, 29];
let test = numbers.findIndex(myFunction);
let test2 = numbers.find(myFunction);


function myFunction(value, index, array) {
    return value > 10;
}

console.log(test) // 2
console.log(test2) // 16


//ES6 Math Operations
console.log(Math.trunc(8.9));    // 8
console.log(Math.trunc(-4.2));    // -4
console.log(Math.sign(-3));    // -1
console.log(Math.sign(0));    //  0
console.log(Math.sign(3));   //  1
console.log(Math.log2(8));  // 3
console.log(Math.log10(100)); // 2


// ES6 Global Methods
console.log(Number.isInteger(100));        // true
console.log(Number.isInteger(2.5));    //false

console.log(isFinite(10 / 0));       // false
console.log(isFinite(10 / 1));       // true
console.log(isNaN("Hello")); // true