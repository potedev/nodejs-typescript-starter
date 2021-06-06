//UseCase -> Service -> de la logique
import { SkillRepo } from "../../skillRepo";
import { CategoryRepo } from "../../../category/categoryRepo";
import { skillProps } from '../../skillTypes'

export class CreateSkill {
    private skillRepo: SkillRepo;
    private categoryRepo: CategoryRepo;

    constructor(skillRepo: SkillRepo, categoryRepo: CategoryRepo) {
        this.skillRepo = skillRepo
        this.categoryRepo = categoryRepo
    }

    public async execute(props: skillProps) {

        const { category } = props

        let categoryEntity = null

        //If a category is passed through the body
        if (category) {
            const foundCategory = await this.categoryRepo.getCategoryById(category)
            console.log('FOUND CATEGORY WITH ID ', foundCategory);

            if (foundCategory) {
                categoryEntity = foundCategory
            }
        }

        props.category = categoryEntity

        return await this.skillRepo.create(props);
    }
}