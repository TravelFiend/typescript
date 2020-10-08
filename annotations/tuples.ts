// tuples are used when we need to preserve a specific order in our arrays

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 40]; // explicitly annotate the order of types

type Drink = [string, boolean, number]; // type alias
const lemonade: Drink = ['yellow', false, 85]; // annotated using previously defined alias

// ehh, huh? not very useful
const carSpecs: [number, number] = [400, 3354];

// oooohh now I understand what those numbers mean
const carStats = {
  horsePower: 400,
  weight: 3354
}