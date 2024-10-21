import { Status } from "../Enum/Status";

export class Task{
    title!: string;
    shortDescription!: string;
    longDescription!: string;
    creationDate!: Date;
    deadLineDate!: Date;
    status!: Status;  
}