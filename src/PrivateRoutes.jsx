import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoutes = () => {
    let token = Cookies.get('token') // Get the token from cookies

    return (
      token ? <Outlet/> : <Navigate to="/login"/>
      
    )
}

export default PrivateRoutes