const carMakers = ['toyota', 'ford', 'scion']; // TS inferred it's a string[]
const theArray: string[] = []; // Array is empty so we must include type annotaion

const carsByMake = [['F150'], ['Supra', 'Corolla'], ['Viper']];
const moreCars: string[][] = []; // this annotation denotes nested arrays with values of type 'string'

// help with inference when extracting values
// since these are extracted from a typed array, inference knows the type
const myCar = carMakers.pop();
const theCar = carMakers[1];

// prevent incompatible values
// carMakers.push(340);  won't work, doesn't match type

// help with map, forEach, etc
carMakers.map((car: string) => car);

// flexible types
const importantDates: (string | Date)[] = [new Date(), 'Wednesday'];
importantDates.push(new Date());
// importantDates.push(34);  won't work, doesn't match type