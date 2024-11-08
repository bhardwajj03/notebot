import {Document, Page} from "react-pdf"
import 'react-pdf/dist/Page/TextLayer.css'; 
import 'react-pdf/dist/Page/AnnotationLayer.css';

interface pdfRendererProps{
    url:String,
}

const PdfRenderer =({url}:pdfRendererProps)=>{
    return (
        <div  className='w-full bg-white rounded-md shadow flex flex-col items-center'>
            <div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
                <div className="flex items-center gap-1.5">
                    top bar
                </div>  
            </div>
            <div className="flex-1 w-full max-h-screen">
                <div>
                    <Document file={} className="max-h-full">
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </div>
    )

}

export default PdfRenderer