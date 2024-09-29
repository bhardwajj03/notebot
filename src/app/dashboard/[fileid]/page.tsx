import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { notFound, redirect } from "next/navigation"

interface PageProps{
    params:{
        fileid:String
    }
}


const Page =async({params}:PageProps)=>{

    // retrieve the file id 
    const fileid = params.fileid.toString(); // Ensure it is a primitive string In TypeScript, there's a difference between the primitive string type and the String object type. The Prisma findFirst function expects a primitive string, not a String object.




    const {getUser}=getKindeServerSession()
    const user = await getUser()  // we're putting await here because because getUser() returns a Promise<KindeUser | null>, but we're treating it as if it returns the resolved value directly

    if(!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

        //make database call

        const file=await db.file.findFirst({
            where:{
                id:fileid,
                userId:user.id,
            },
        })

        if(!file) notFound()

    return (
        <div>{fileid}</div>
    )
}

export default Page