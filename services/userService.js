import * userModel from "../models/userModel.js";
import ValidationError from "../utils/ValidationError.js";
import validator from "validator";

const doesUserExist = async(email) => {
    const existing = await userModel.findUserByEmail(email);

    if(existing.length > 0) {
        return true;
    }

    return false;
}

export const createAccount = async(user) => {
    if(!user.name || !user.email || !user.password)  {
        throw new ValidationError('Name, email and password is required', 400);
    }

    if(!validator.isEmail(user.email)){
        throw new ValidationError('Improper email format', 400);
    }

    if(!validator.isStrongPassword(user.password)){
        throw new ValidationError('Password is not strong enough', 400);
    }

    const existing = await doesUserExist(user.email);

    if(existing) {
        throw new ValidationError('An account with this email already exists', 400);
    }

}

export const login = async() => {

}