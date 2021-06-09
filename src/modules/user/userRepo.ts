import { createUserProps } from './userTypes'

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: createUserProps) {
        const UserEntity = this.entities.User

        const exists = await this.exists(userProps.email);

        if (!exists) {
            await UserEntity.create(userProps).save()
        }

        return
    }

    public async exists(email: string): Promise<boolean> {
        const UserEntity = this.entities.User;

        const result = await UserEntity.findOne({ email: email })

        return !!result === true;
    }
}