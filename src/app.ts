type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Rocha",
    privileges: ["To rule them all"],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function Add(a: number, b: number): number
function Add(a: string, b: string): string
function Add(a: string, b: number): string
function Add(a: number, b: string): string
function Add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

const result = Add("Rocha", "Jaquelinda");
result.split(' ');

const fetchedUserData = {
    id: "0",
    userName: "Rocha",
    job: { title: "CEO", description: "My own company" }
};
// optional chainning is the "?" inside log.
console.log(fetchedUserData?.job?.title);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges" + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log("Driving a car");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck");
    }

    loadCargo() {
        console.log("Loading cargo...");
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle (vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case "bird":
            console.log("Flying at speed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("Running at speed: " + animal.runningSpeed);
            break;
    }
}

moveAnimal({ type: "horse", runningSpeed: 8 });

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    1: "Not a valid email",
}