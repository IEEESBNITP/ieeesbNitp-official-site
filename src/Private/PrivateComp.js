import React from 'react'; 
import {auth} from '../Firebase'; 
import { Outlet, Navigate } from 'react-router-dom'
function PrivateComponent() {
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));

    return (auth.currentUser && localAuth) ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateComponent 