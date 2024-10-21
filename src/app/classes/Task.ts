import { Status } from "../Enum/Status";

export class Task {
    title!: string;
    shortDescription!: string;
    longDescription!: string;
    creationDate!: Date;
    deadLineDate!: Date;
    status!: Status;

    constructor(title: string, shortDescription: string, longDescription: string,
        creationDate: Date, deadLineDate: Date, status: Status) {
            this.title = title;
            this.shortDescription = shortDescription;
            this.longDescription = longDescription;
            this.creationDate = creationDate;
            this.deadLineDate = deadLineDate;
            this.status = status;
    }
}
