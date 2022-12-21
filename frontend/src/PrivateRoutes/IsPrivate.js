import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function IsPrivate() {
  const { user, isAuth } = useSelector(s => s.auth);
  return (
    <>
    {!isAuth ? <Navigate to="/authenticate"/>
    : !user?.isActivated ? <Navigate to="./activate" />
    : <Outlet/>
    }
    </>
    
  )
}

export default IsPrivate