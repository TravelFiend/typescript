class Vehicle {
  constructor(public color: string) {
  }
  // public drive(): void {       **** if not commented, would be overridden by child class method
  //   console.log('vroom vroom'); *** TS gives warning when child method with same name is private and parent's is public
  // }
  protected honk(): void {  // available to child classes
    console.log('Beep beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {   // overrides parent class method
    console.log('bbbrrrraaapppp');
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'cyan');
car.startDriving();
