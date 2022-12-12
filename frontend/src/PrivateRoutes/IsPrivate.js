import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { user } from '../DummyData'
import { useSelector } from 'react-redux';

function IsPrivate() {
  const { user, isAuth} = useSelector(s => s.auth);
  const {isActivated} = user
  return (
    <>
    {!isAuth ? <Navigate to="/authenticate"/>
    : !isActivated ? <Navigate to="./activate" />
    : <Outlet/>
    }
    </>
    
  )
}

export default IsPrivate