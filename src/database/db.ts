import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
   type: "mysql",
   username: "root",
   password: "root",
   logger: "simple-console",
})


AppDataSource.initialize().then(() => {
   console.log("DB is Connected")
}).catch((error) => console.log(`DB error ${error}`))

