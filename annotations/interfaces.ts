const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);


// a better way to do the same thing, especially when used more than once
interface Reportable {
  // name: string;
  // year: number;       ***TS is not checking for this since we only use 'summary()' in our printSummary function***
  // broken: boolean;
  summary(): string; // function called summary that returns a string
}

const supra = {
  name: 'supra',
  year: 2020,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
};
// -------->> both above and below have 'sumary()' property, so both of type reportable, even though they're vastly different
const theDrink = {
  color: 'green',
  carbonated: false,
  sugar: 300,
  summary(): string {
    return `My ${this.color} drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (report: Reportable): void => {
  console.log(report.summary());
};

printSummary(supra);
printSummary(theDrink);
