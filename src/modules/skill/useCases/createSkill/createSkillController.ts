import { CreateSkill } from './createSkill'
import { Request, Response } from 'express'
//Controller

export class CreateSkillController {
    private useCase: CreateSkill;

    constructor(createSkill: CreateSkill) {
        this.useCase = createSkill;
    }

    public async execute(req: Request, res: Response) {

        // req.body = {
        //     name:"Maquetter une application"
        //     category: 1
        // }

        //On récupère le body
        const { name, category } = req.body

        //Si le body est pas valide, on renvoie une 400
        if (!name) {
            return res.status(400).json({
                error: {
                    message: 'Name is required'
                }
            });
        }

        const skill = await this.useCase.execute({ name, category });
        console.log('Controller skill result', skill);

        return res.status(200).json(skill);
    }
}