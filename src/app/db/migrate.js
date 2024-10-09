import { db } from "./db"
import { migrate } from "drizzle-orm/neon-http/migrator"

async function main(){
    try{
        await migrate(db, {
            migrationsFolder: './src/app/db/migrations'
        })
        console.log("migration was successful")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

main()