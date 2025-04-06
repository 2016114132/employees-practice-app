import { Employee } from "./Employee";
import { query } from "../config/db";
import { IParttimeEmployee } from "../interfaces/IParttimeEmployee";

export class ParttimeEmployee extends Employee implements IParttimeEmployee {
    hourlyRate: number;
    hoursWorked: number;

    constructor(id: number, name: string, hourlyRate: number, hoursWorked: number) {
        super(id, name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    setHourlyRate(rate: number): void {
        this.hourlyRate = rate;
    }

    setHoursWorked(hours: number): void {
        this.hoursWorked = hours;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }

    async insert(): Promise<boolean> {
        var result = null;

        try{            
            result = await query(
                "INSERT INTO Employees (name, hourly_rate, hours_worked, employee_type) VALUES ($1, $2, $3, $4)"
                , [this.name, this.hourlyRate, this.hoursWorked, "Parttime"]);
        }catch(error){
            console.log(error);
            throw new Error("Failed to insert part-time employee.");     
        }                
    
        return result ? true : false;
    }
}
