import { entitiesObject } from '../../../../app/database/typeorm/entities'

import { UserRepo } from '../../userRepo'
// import { authService } from '../../services';

import { Login } from './login'
import { LoginController } from './loginController'

const userRepo = new UserRepo(entitiesObject)
const login = new Login(userRepo)
const loginController = new LoginController(login)

export { login, loginController }