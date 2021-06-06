import { Router } from 'express'
import { createSkillController } from './useCases/createSkill/'

const skillRouter: Router = Router();

///api/v1/skills/
skillRouter.post('/', (req, res) => createSkillController.execute(req, res))

export { skillRouter }