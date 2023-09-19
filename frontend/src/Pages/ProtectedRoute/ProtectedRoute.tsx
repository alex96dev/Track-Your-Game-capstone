import {Navigate, Outlet} from "react-router-dom";

type Probs = {
    user:string|undefined;
}

export default function ProtectedRoute(probs:Probs){

    const authenticated:boolean = probs.user !== undefined && probs.user !== "anonymousUser" && probs.user !== "";

    return (
        authenticated ? <Outlet/> : <Navigate to={"/"}/>
    )

}