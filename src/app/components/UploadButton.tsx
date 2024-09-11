"use Client"

import { useState } from "react"
import { Dialog,DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/Button"


const UploadButton=()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false)
     
    return(
        <Dialog 
            open={isOpen}
            onOpenChange={(v)=>{
                if(!v){                                        // v= Value
                    setIsOpen(v)
                }
            }}
        >
              
               
            <DialogTrigger  //this is button also /* we're using aschild cause we want to give function to below button as both are buttons and html dont provide this func */
                onClick={() => setIsOpen(true)}
                asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>
        </Dialog>
    )
}

export default UploadButton