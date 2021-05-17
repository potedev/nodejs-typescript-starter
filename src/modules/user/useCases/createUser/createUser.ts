import { UserRepo } from "../../userRepo";
import { createUserProps } from '../../userTypes'

export class CreateUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async execute(props: createUserProps) {
        this.userRepo.create(props);
    }
}