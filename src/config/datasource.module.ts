import { User } from "../user/user.entity"
import { DataSource } from "typeorm"
import { Role } from "../roles/entities/role.entity"

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'testdb',
    entities: [User, Role],
    migrations: ["migration/*.ts"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource