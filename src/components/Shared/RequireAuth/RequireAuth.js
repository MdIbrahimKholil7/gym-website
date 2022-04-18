import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './RequireAuth.css'
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    console.log(user)
    if (loading) {
        return (
            <div className='spinner'>
                <div class="d-flex justify-content-center ">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
        // console.log('proteceted')
    }
    return children
};

export default RequireAuth;