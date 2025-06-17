import { Navigate, Outlet } from "react-router-dom"

export default function Protection({isAuth}){
    return (
        isAuth ? <Outlet /> : <Navigate to="/"/>
    )
}