import { IEmployee } from "./IEmployee";

export interface IFulltimeEmployee extends IEmployee {
    annualSalary: number;
    setAnnualSalary(salary: number): void;
    insert(): Promise<boolean>;
}