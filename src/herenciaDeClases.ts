import {Car} from './claseConConcstructor.js'

class ElectricCar extends Car {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log(`Charging the ${this.getMake()}... Battery life: ${this.batteryLife}%`);
  }
}

const tesla = new ElectricCar("Tesla", 90);
tesla.drive();
tesla.charge();