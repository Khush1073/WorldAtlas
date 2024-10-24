import { Headers } from "./UI/Headers"
import { Footer } from "./UI/Footers"
import { Outlet } from "react-router-dom"
export const Applayout = ()=>{
    return (
        <>
        < Headers />
     
                <Outlet />
       
        <Footer />
        </>
    )
}