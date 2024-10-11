"use client"


import { Dialog,DialogContent,DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/Button"
import { useState } from "react"
import Dropzone from 'react-dropzone'
import { Cloud } from "lucide-react"


const UploadDropzone=()=>{
    return <Dropzone multiple={false}>
        {({getRootProps,getInputProps,acceptedFiles})=>(
            <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-400 rounded-lg"></div>
        )}
    </Dropzone>
}

const UploadButton=()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false)
     
    const UploadDropzone =()=>{

        const [isUploading,SetIsUploading]=useState<boolean>(true)
        const [uploadProgress,SetUploadProgress]=useState<number>(0)



       return (
            <Dropzone multiple={false} onDrop={(acceptedFiles)=>{
                console.log(acceptedFiles)
            }}>
                {({getRootProps,getInputProps,acceptedFiles})=>(
                    <div {...getRootProps()}
                    className='border h-64 m-4 border-dashed border-gray-300 rounded-lg'>
                        <div className='flex items-center justify-center h-full w-full'>
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                        <Cloud /></div>
                                </label>
                        </div>
                    </div>
                )}
            </Dropzone>
       )
    }

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