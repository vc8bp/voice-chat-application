import { Outlet, Navigate} from 'react-router-dom'
import {user} from '../DummyData'
function IsGuest() {
    return (
        !user.isAuthenticate ? <Outlet/> : <Navigate to="/rooms" />
    )
}

export default IsGuest