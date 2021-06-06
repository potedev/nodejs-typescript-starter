import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { CategoryRepo } from '../../../category/categoryRepo'
import { CreateSkill } from './createSkill'
import { CreateSkillController } from './createSkillController'


//Je construit mon repo avec les entités dont j'ai besoin
const skillRepo = new SkillRepo(entitiesObject)
const categoryRepo = new CategoryRepo(entitiesObject)
const createSkill = new CreateSkill(skillRepo, categoryRepo)
const createSkillController = new CreateSkillController(createSkill)

export { createSkill, createSkillController }