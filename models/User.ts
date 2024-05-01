const knex = require('../config/db-config')
import { User } from '../interfaces/IUser'

export const newUser = async (user: User) => {
    return await knex('users').insert(user)
}
