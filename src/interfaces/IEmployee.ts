export interface IEmployee {
    id: number;
    name: string;
    setID(id: number): void;
    setName(name: string): void;
    calculateSalary(): number;
    displayDetails(): void;
    insert(): Promise<boolean>;
}