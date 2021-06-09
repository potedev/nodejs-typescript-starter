import { UserRepo } from "../../userRepo";
import { createUserProps } from '../../userTypes'
import argon2 from 'argon2'

export class CreateUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async execute(props: createUserProps) {

        try {
            const userAlreadyExists = await this.userRepo.exists(props.email)

            if (userAlreadyExists) {
                return {
                    success: false,
                    message: 'User already exists'
                }
            }

            const hashPassword = await argon2.hash(props.password);
            console.log('hashed password', hashPassword);

            props.password = hashPassword;

            await this.userRepo.create(props);

            return {
                success: true,
                message: 'User is correctly created'
            }
        }
        catch (err) {
            return {
                success: false,
                message: err
            }
        }
    }
}