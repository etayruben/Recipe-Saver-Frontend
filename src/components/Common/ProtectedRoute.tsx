import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let { isAuthenticated } = useAuth0()
    
    return(
        isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
