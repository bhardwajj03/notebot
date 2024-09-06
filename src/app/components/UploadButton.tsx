'use Client'

import { Dialog , DialogTrigger } from "./ui/dialog"
import { useState } from "react"

const UploadButton=()=>{
    const [isopen,SetisOpen]=useState<boolean>(false)
     
    return(
        <Dialog 
            open={isopen}
            onOpenChange={(v)=>{
                if(!v){                                        // v= Value
                    SetisOpen(v)
                }
            }}
        >
            <DialogTrigger asChild>   //this is button also /* we're using aschild cause we want to give function to below button as both are buttons and html dont provide this func */
                <button>Upload Pdf</button>
            </DialogTrigger>
        </Dialog>
    )
}

export default UploadButton