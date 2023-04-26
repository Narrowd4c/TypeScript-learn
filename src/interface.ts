interface Pet{
    Dog: string
    Cat: string
    printName: ()=> void
}

class Pets implements Pet { 
    Dog: string;
    Cat: string;
    constructor(name: string, n2:string) { 
        this.Dog = name
        this.Cat = n2
    }
    printName() { 
        console.log("DogName:", this.Dog)
        console.log("CatName:", this.Cat)
    }
}

const n = new Pets("n1", "m2")
n.printName()

/// nesting interface

interface Data { 
    data: string
    id: string
}

interface DataList { 
    date: Data
}

//

interface N { 
    [code1: number]:  string
    [code2: string]: string
}

const n23: N = { 12: "row", 'name': "string" }

//

interface Option { 
    num?: number
    str: string
}

const te: Option = {
    //num: 12,
    str: "s"
}

//
interface Directory {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    }
  }
}

interface Directory2 {
  addFile: (name: string) => void;
  config: Config
}

interface DefaultConfig {
      encoding: string;
      permissions: string;
}

interface Config {
  default: DefaultConfig
}


/// extends

interface Developer extends HumanNode{
  code: () => void;
}

// Add your interface here
interface HumanNode {
  name: string
  hobbies: string[]
}

const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

me.code();