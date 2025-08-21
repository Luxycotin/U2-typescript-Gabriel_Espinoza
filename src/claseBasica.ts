class Car {
    make : string = 'marca del vehículo';

    constructor(make: string){
        this.make = make
    }

    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

const cars = new Car('Lamborghini');
cars.drive()