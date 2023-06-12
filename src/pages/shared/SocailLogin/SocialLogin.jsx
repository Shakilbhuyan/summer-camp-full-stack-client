import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email };
                fetch('https://summer-camp-school-server-one.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        
                            navigate(from, { replace: true });
                      
                    })


            })


    }
    return (
        <div>
            <div className="divider "></div>
            <div className='text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-4xl">
                    <FcGoogle></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;