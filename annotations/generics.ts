// class ArrayOfNumbers {
//   constructor(public collection: number[]){}

//   get(index: number): number {
//     return this.collection[index];
//   }
// }

// class ArrayOfStrings {
//   constructor(public collection: string[]) { }

//   get(index: number): string {
//     return this.collection[index];
//   }
// }

class ArrayOfAnything<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c', 'd', 'e']);
new ArrayOfAnything<number>([1, 2, 3, 4, 5]);

// ***************** example of generics with functions *******************

// function printStrings(arr: string[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// function printNumbers(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// **************** generic constraints ****************

class Cars {
  print() {
    console.log('I\'m a car');
  }
}

class Houses {
  print() {
    console.log('I\'m a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Houses>([new Houses(), new Houses()]);
printHousesOrCars<Cars>([new Cars(), new Cars()]);
