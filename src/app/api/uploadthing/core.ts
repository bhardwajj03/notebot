import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function


export const ourFileRouter = {
  
  pdfUploader: f({ image: { maxFileSize: "4MB" } })
   
    .middleware(async ({ req }) => {
      const {getUser}=getKindeServerSession()
      const user = await getUser()  // we're putting await here because because getUser() returns a Promise<KindeUser | null>, but we're treating it as if it returns the resolved value directly
  
      if(!user || !user.id) throw new Error('Unauthorized')
      return {userId:user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
