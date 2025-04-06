import { IEmployee } from "../interfaces/IEmployee";

export abstract class Employee implements IEmployee {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    setID(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    abstract calculateSalary(): number;
    abstract insert(): Promise<boolean>;

    displayDetails(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.calculateSalary()}\n`);
    }
}
