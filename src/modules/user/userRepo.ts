import { createUserProps } from './userTypes'

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: createUserProps) {
        const UserEntity = this.entities.User

        return await UserEntity.create(userProps).save()
    }
}