import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const AdminRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
   return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;