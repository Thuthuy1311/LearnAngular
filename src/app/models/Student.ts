import { Data } from "@angular/router";

export interface Student {
    id: string;
    code: string;
    gerder: string,
    firstName: string,
    lastName: string,
    dob?: Data;
    email?: string;
    phone?: string;
    picture?: string;
}