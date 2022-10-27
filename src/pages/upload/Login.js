import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    useEffect(() => {
        if (auth && localAuth) {
            navigate('/dashboard')
            // if (auth.currentUser.uid === localAuth.uid) {
            // }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleLogin = (e) => {
        e.preventDefault()
        if(email !=='' && password!==''){

            setLoader(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem('ieee-auth', JSON.stringify(user))
                setLoader(false);
                if (user) {
                    setEmail(''); 
                    setPassword('');
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                setLoader(false);
            });
        }else{
            alert("Provide correct Inputs")
        }
    }

    return (
        <> 
            <div className="min-h-screen py-6 flex bg-white dark:bg-[#181F2A] flex-col justify-center sm:py-12 pattern">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">IEEE SB NITP ADMIN LOGIN</h1>
                            </div>
                            <form>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autoComplete="off" id="email" name="email" onChange={e => setEmail(e.target.value)} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <button className="tailwind-btn" type='submit' onClick={handleLogin}>{loader ? "Wait.." : "Login"}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login