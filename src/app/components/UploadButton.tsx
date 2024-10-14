"use client"


import { Dialog,DialogContent,DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/Button"
import { useState } from "react"
import Dropzone from 'react-dropzone'
import { Cloud } from "lucide-react"


const UploadDropzone=()=>{
    return <Dropzone multiple={false} onDrop={(acceptedFile)=>{
        console.log(acceptedFile) 
    }}>
        {({getRootProps,getInputProps,acceptedFiles})=>(
            <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-400 rounded-lg">
                <div className="flex items-center justify-center h-full w-full">
                    <label htmlFor="dropzone-file" className="flex felx-col items-center justify-center w-full h-full rounded-lg cusrsor-pointer bg-gray-50 hover:bg-gray-150">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Cloud className="h-6 w-6 text-zinc-500 mb-2"/>
                            <p className="mb-2 text-sm text-zinc-700">
                                <span className="font-semibold">Click to Upload</span>{' '}or drag and drop
                            </p>
                            <p className="tex-xs text-zinc-500">PDF (Up to 4MB)</p>
                        </div>    
                        {acceptedFiles && acceptedFiles[0] ? ( 
                            <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200"> 
                                <div>
                                    
                                </div>
                            </div>
                        ):null}   

                    </label>
                </div>
            </div>
        )}
    </Dropzone>
}

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

            <DialogContent>
               <UploadDropzone />
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton