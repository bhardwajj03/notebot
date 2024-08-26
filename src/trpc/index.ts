import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {publicProcedure, router} from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { redirect } from "next/dist/server/api-utils";

export const  appRouter=router({
    authCallback:publicProcedure.query( async()=>{
        const {getUser} = getKindeServerSession()
        const user= await getUser()

        if(!user.id || !user.email)
            throw new TRPCError({code:'UNAUTHORIZED'})

        // check if the user is in the database 
        const dbUser =  await db.user.findFirst({
            where:{
                id:user.id
            }
        })

        if (!dbUser) {
            // it means user is not in database so we have to make user to register in database 

            await db.user.create({
                data:{
                    id:user.id,
                    email:user.email
                }
            })
        }



        return {success :true}
    }),
    

});

export type appRouter = typeof appRouter;