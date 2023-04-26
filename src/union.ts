type Mytype2 = string | number;

// 
function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === "string"){
     console.log(value.toLowerCase())
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2))
  }
}

formatValue('Hiya');
formatValue(42);

//
const timesList: (string | number)[] = ["string", 12];



// TypeScript 將只允許我們調用數字和布爾值共享的方法。
const batteryStatus: boolean | number = false;
 
batteryStatus.toString(); // No TypeScript error
//batteryStatus.toFixed(2); // TypeScript error

// Literal
type Color = 'green' | 'yellow' | 'red';
 
function changeLight(color: Color) {
  // ...
}

// Type Guards

type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

const bettaFish = { 
  name: 'Neptune', 
  swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
  if ('run' in pet) {
      return pet.run();
  }
  if ('swim' in pet) {
      return pet.swim()
  }
}

console.log(move(siameseCat))