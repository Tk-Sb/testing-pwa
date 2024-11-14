import Link from "next/link";
import { db } from "../db/db";
import { userTable } from "../db/schema";

export default async function Home() {
  const data = await db.select({
    id: userTable.id
  }).from(userTable)
  
  console.log(data)

  return (
    <>
      {/* <SubButton></SubButton> */}
      <Link href={"/pep"}>
        pep
      </Link>
      <div>
        {data.map((user) => (  
          <li key={user.id}>  
            {user.id}
          </li>  
        ))} 
      </div>
    </>
  )
}