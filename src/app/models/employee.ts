import { Department } from "./department";
import { Level } from "./level";


export interface IEmployee {
    "_id": number;
    "name": string;
    "department": Department;
    "level": Level;
}