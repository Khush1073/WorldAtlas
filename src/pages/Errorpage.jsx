import { NavLink, useRouteError } from "react-router-dom";

export const Errorpage = ()=>{
    const error = useRouteError();
    console.log(error)
    return <>
    <h1>Error page</h1>
    <NavLink to="/"><button>Go home</button></NavLink>
    </> 
}