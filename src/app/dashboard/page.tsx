import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"


const page=()=>{
    const {getUser}=getKindeServerSession()
    const user=getUser()

    return(
        <>
            <div>{user.email}</div>
        </>
    )
}

export default page