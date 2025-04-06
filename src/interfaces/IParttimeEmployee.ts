import { IEmployee } from "./IEmployee";

export interface IParttimeEmployee extends IEmployee {
    hourlyRate: number;
    hoursWorked: number;
    setHourlyRate(rate: number): void;
    setHoursWorked(hours: number): void;
    insert(): Promise<boolean>;
}