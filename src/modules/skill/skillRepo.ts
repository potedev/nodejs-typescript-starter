import { skillProps } from './skillTypes'

export class SkillRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill //skill
        this.entities = entities
    }

    public async create(skillProps: skillProps) {
        const skillEntity = this.entities.Skill

        return await skillEntity.create({ name: skillProps.name, category: skillProps.category }).save()
    }

    public async getSkillById(skillId: number) {
        const skillEntity = this.entities.Skill

        return await skillEntity.findOne(skillId)
    }
}