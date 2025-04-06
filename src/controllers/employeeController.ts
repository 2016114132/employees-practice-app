import {Request, Response} from "express";
import { FulltimeEmployee } from "../models/FulltimeEmployee";
import { ParttimeEmployee } from "../models/ParttimeEmployee";

const appTitle = "Employees Management";

export const getHome = (req: Request, res: Response) => {
    res.render("index", {
        title: appTitle,
    });      
};

export const addFulltimeEmployee = async (req: Request, res: Response) => {
    const { fullName, annualSalary } = req.body;

    try {
        if(!fullName){  
            throw new Error("Full Name is required");     
        }

        if(!annualSalary){  
            throw new Error("Annual Salary is required");     
        }

        // Create instance of a full time employee and insert to database
        const employee = new FulltimeEmployee(0, fullName, parseFloat(annualSalary));
        await employee.insert();

        res.redirect("/");
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};

export const addParttimeEmployee = async (req: Request, res: Response) => {
    const { fullName, hourlyRate, hoursWorked } = req.body;

    try {
        if(!fullName){  
            throw new Error("Full Name is required");     
        }

        if(!hourlyRate){  
            throw new Error("Hourly Rate is required");     
        }

        if(!hoursWorked){  
            throw new Error("Hours Worked is required");     
        }

        // Create instance of a part time employee and insert to database
        const employee = new ParttimeEmployee(0, fullName, parseFloat(hourlyRate), parseInt(hoursWorked));
        await employee.insert();

        res.redirect("/");
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};

// function testModels () {
//     // Create a full-time employee
//     const fullTimer = new FulltimeEmployee(1, "Alice Johnson", 72000);
//     fullTimer.displayDetails();

//     // Create a part-time employee
//     const partTimer = new ParttimeEmployee(2, "Bob Smith", 25, 80);
//     partTimer.displayDetails();

//     // Update values and display again
//     partTimer.setHourlyRate(30);
//     partTimer.setHoursWorked(100);
//     partTimer.displayDetails();
// }