import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading]=useAuthState(auth)
    const location=useLocation()
    console.log(user)
    if(!user){
       return <Navigate to='/login' state={{from:location}} replace/>
        // console.log('proteceted')
    }
    return children
};

export default RequireAuth;