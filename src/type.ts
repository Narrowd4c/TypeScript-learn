let obj: { name: string, age: number }[] = [
    { name: "rashid", age: 32 },
    { name: "ken", age: 28 }
]
// Type 

type List = {
    name: string,
    age: number
}

type List2 = {
    name: string,
    age: number
}

let list: List = { name: "rashid", age: 34 } 

let list2: List2 = list

type Mytype = string | number

type func = () => {}

type Generic<T> = {
    name: string,
    collection: T[]
}

function findMiddleMember<M>(members: M[]): M {
  return members[Math.floor(members.length/2)];
}
findMiddleMember<number>([210, 369, 102])


type Human = { name: string, job: string };

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:

stringArray = getFilledArray<string>('hi', 6)
numberArray = getFilledArray<number>(9, 6)
personArray = getFilledArray<{name:string, age:number}>({name: 'J. Dean', age: 24}, 6)
coordinateArray = getFilledArray<[number, number]>([3, 4], 6)