import { Document } from "mongoose";

export interface IUserInterface extends Document{
    uid: string, 
    fullName: string, 
    phoneNo: string, 
    email: string,
    address:string,
    country:string,
    state:string,
    city:string,
    createdAt: string
}