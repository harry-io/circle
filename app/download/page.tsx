import Header from "@/components/Header/Header"
import { Suspense } from "react"

const DownloadPage = () =>{
    const Download = () =>{
        return(
            <div>
                <Header/>
                DOWNLOAD
            </div>
        )
    }

    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Download/>
        </Suspense>
    )
}

export default DownloadPage