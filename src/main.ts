let str: string;
let num: number;
let bool: boolean;

function fn(num:number = 12, str: string, bool?:boolean):void { 
    console.log(num, str)
}

function fn2<T>(t: T) { 
    console.log(typeof t)
}

fn2<string>("str")

const fn3 = <T>(x: T) => typeof x


// --- array ----

let arr: string[] = ["string", "str"]
let arrT: Array<number> = [1,2,3,4,5]
let arrStr: string[][] = [["string"]]

let arrNum: [number, string][] = [[1, "str1"], [2, "str2"]]

// --- tuple ---

// This is an array
let header: string[] = ['Name', 'Age', 'Smoking', 'Salary'];
// This is a tuple
let profile: [string, number, boolean, number] = ['Kobe', 39, true, 150000];

// profile[0] = 12; /* error */

let eventDate: [string, string] = ['January', '2'];

// This is an array
let newDate: string[] = ['January', '12'];

//eventDate = newDate

let tuple3: [string, number, string] = ["str", 12, "rolling"];

let t = tuple3.concat([12, 33])
// typeof t == (string|number)[]
console.log(typeof t)

// tuple3 dose not have type boolean, concat will print error
//let t = tuple3.concat(['false', 'night', true])

//--- Rest Parameter ---
function fn4(...para:number[]) { 
    para.forEach(x => { console.log(x)})
}

fn4(1,2,3,4,5,6)

//--- Spread ---

let aryNum: number[] = [1, 2, 3]

function sum(num:number, num1:number, num2:number) { 
    console.log(num + num1 + num2)
}

let m = Math.max(...aryNum)
