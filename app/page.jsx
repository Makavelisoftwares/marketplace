import { AuthOptions } from "@/utils/auth-options"
import { db } from "@/utils/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Home() {

  const session=await getServerSession(AuthOptions)
  const email =session?.user?.email

  console.log(email)

  if(!email){
    redirect("/auth/sign-in")
  }

  const getUser=await db.user.findUnique({
    where:{
      email
    }
  })

  if(getUser?.Role=="SUPERADMINISTRATOR" || getUser?.Role=="MODERATOR"){
    return redirect("/dashboard")
  }

  return (
    <div>
      Home Page
    </div>
  )
}
