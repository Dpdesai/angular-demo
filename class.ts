interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee {
  #id: number;
  protected name: string;
  address: Address;

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = Address;
  }

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", {
  street: "ABC",
  city: "Bangalor",
  state: "Karnataka",
  pin: "560076",
});
let address = john.getNameWithAddress();

john.empId = 100;

console.log(john.empId);

Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

console.log(john);
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
