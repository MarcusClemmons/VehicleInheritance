//part 1
function vehicleProto(){


}

function bike(numWheels){
    this.numWheels = numWheels;
    }
    
function car(numDoors){
    this.numDoors = numDoors;
    }

bike.prototype = Object.create(vehicleProto.prototype);
car.prototype = Object.create(vehicleProto.prototype);


const bike1 = new bike(2);
const car1 = new car(4);

//part2

function vehicle(make, year, model){
    this.make = make;
    this.year = year;
    this.model = model;
    
    }
bike.prototype.constructor = vehicle;
car.prototype.constructor = vehicle;


//part3

class Vehicle{
    constructor(make, year, model){
        this.make = make;
        this.year = year;
        this.model = model;
    }


}

class Bike extends Vehicle{
constructor(numWheels, make, year, model){
    super(make, year, model)
    this.numWheels = numWheels;
}
kickStand(){
    console.log(true)
}

boyOrgirl(){
    console.log(boy)
}

}

class Car extends Vehicle{
constructor(numDoors, make, year, model){
    super(make, year, model)
    this.numDoors = numDoors;
}

speed(){
    console.log('45 mph');
}

AmericanOrForgien(){
    console.log(American)
}
}

const Bike2 = new Bike(3, 'schwinn', 2001, 'fastback');
const Car2 = new Car(2, 'ford', 1973, 'mustang');