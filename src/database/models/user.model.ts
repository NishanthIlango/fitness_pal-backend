import mongoose, { Document, Schema } from "mongoose";
import { IUserInterface } from "../interfaces/user.interface";

const userSchema = new Schema<IUserInterface>({
    uid: {type:String,required:true}, 
    fullName: {type:String,default:"User"}, 
    phoneNo: {type:String,required:true}, 
    email: {type:String,required:true},
    address:{type:String,default:"Address"},
    country:{type:String,default:"Country"},
    state:{type:String,default:"State"},
    city:{type:String,default:"City"},
    createdAt:{ type: String, required: true },
});

const UserModel = mongoose.model<IUserInterface>("UserModel", userSchema);
export default UserModel;
