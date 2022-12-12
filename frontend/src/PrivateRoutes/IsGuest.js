import { useSelector } from 'react-redux';
import { Outlet, Navigate} from 'react-router-dom'
import {user} from '../DummyData'

function IsGuest() {
    const isAuth = useSelector(s => s.auth.isAuth);
    return (
        !isAuth ? <Outlet/> : <Navigate to="/rooms" />
    )
}

export default IsGuest