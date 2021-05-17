import { CreateUser } from './createUser'
import { Request, Response } from 'express'

//DTO
import { RequestCreateUserDto } from './createUserDto'

//Controller
export class CreateUserController {
    private useCase: CreateUser;

    constructor(createUser: CreateUser) {
        this.useCase = createUser;
    }

    public async execute(req: Request, res: Response) {

        const requestUserDto = new RequestCreateUserDto(req.body);
        const dtoErrors = await requestUserDto.isValid(requestUserDto)

        if (!!dtoErrors) {
            return res.status(400).json(dtoErrors);
        }

        this.useCase.execute(req.body);
    }
}