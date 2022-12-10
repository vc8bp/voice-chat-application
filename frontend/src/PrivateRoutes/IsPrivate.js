import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { user } from '../DummyData'

function IsPrivate() {
  return (
    <>
    {!user.isAuthenticate ? <Navigate to="/authenticate"/>
    : !user.isActivated ? <Navigate to="./activate" />
    : <Outlet/>
    }
    </>
    
  )
}

export default IsPrivate