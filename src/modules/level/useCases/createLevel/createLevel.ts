//UseCase -> Service -> de la logique
import { LevelRepo } from "../../levelRepo";
import { levelProps } from '../../levelTypes'

export class CreateLevel {
    private levelRepo: LevelRepo;

    constructor(levelRepo: LevelRepo) {
        this.levelRepo = levelRepo
    }

    public async execute(props: levelProps) {
        return await this.levelRepo.create(props);
    }
}