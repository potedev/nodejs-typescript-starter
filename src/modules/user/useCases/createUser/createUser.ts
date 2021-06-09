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

            const user = await this.userRepo.create(props);
            console.log('user', user);

            return {
                success: true
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