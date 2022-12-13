import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";

function IsActivated() {
  const { user, isAuth} = useSelector(s => s.auth);
  const isActivated = user?.isActivated || false
  return (
    isAuth ?      
        isActivated ? <Navigate to="/rooms" /> : <Outlet/> 
    : <Navigate to="/authenticate"/>
  )
}

export default IsActivated