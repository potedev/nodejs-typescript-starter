import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

import { typeORMConfig } from './app/database/typeorm'

console.log(typeORMConfig);

createConnection(typeORMConfig).then(conn => {
    console.log(conn);
})

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: DB_PORT,
//     username: "root",
//     password: "",
//     database: DB_DATABASE,
//     synchronize: true,
//     logging: true,
//     entities: [User, Category, Skill]
// }).then(conn => {
//     console.log('connection established');
// })


createServer();