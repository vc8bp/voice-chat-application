import { Outlet, Navigate } from "react-router-dom"
import { user } from "../DummyData"

function IsActivated() {
  return (
    user.isAuthenticate ?      
        user.isActivated ? <Navigate to="/rooms" /> : <Outlet/> 
    : <Navigate to="/"/>
  )
}

export default IsActivated