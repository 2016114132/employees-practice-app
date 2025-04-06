import { Employee } from "./Employee";
import { query } from "../config/db";
import { IFulltimeEmployee } from "../interfaces/IFulltimeEmployee";

export class FulltimeEmployee extends Employee implements IFulltimeEmployee {
    annualSalary: number;

    constructor(id: number, name: string, annualSalary: number) {
        super(id, name);
        this.annualSalary = annualSalary;
    }

    setAnnualSalary(salary: number): void {
        this.annualSalary = salary;
    }

    calculateSalary(): number {
        return this.annualSalary;
    }

    async insert(): Promise<boolean> {                    
        var result = null;

        try{
            result = await query(
                "INSERT INTO Employees (name, annual_salary, employee_type) VALUES ($1, $2, $3)"
                , [this.name, this.annualSalary, "Fulltime"]);
        }catch(error){
            console.log(error);
            throw new Error("Failed to insert full-time employee.");     
        }                
    
        return result ? true : false;
    }
}