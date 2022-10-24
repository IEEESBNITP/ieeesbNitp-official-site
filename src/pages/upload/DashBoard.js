import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'
import { signOut } from 'firebase/auth';
function DashBoard() {
  const navigate = useNavigate();
  const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
  useEffect(() => {
    if (!(auth.currentUser && localAuth)) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleLogout = () => {
    if (auth.currentUser && localAuth) {
      localStorage.removeItem('ieee-auth')
      signOut(auth)
        .then(() => {
          alert("logout")
          navigate('/login')
        })
        .catch((err) => { console.log(err) })
    } else {
      alert("already logout")
    }
  }
  return (
    <>
      <div className='dark:bg-[#181F2A] text-gray-400'>

        <div className='mx-5 py-5'>
          <h1 className='text-3xl text-center'>Welcome</h1>
          <hr />
        </div>
        <div className='md:flex'>
          <div>
            <img src="study.png" alt="" />
          </div>
          <div className='p-10'>
            <Link to="/list-event"><button className='bg-blue-500 text-white rounded-md px-2 py-1'>Add new Event</button></Link>
            <Link to="/add-excom"><button className='bg-blue-500 text-white rounded-md px-2 py-1'>Add ExCom</button></Link>
            <Link to="/upload-gallery"><button className='bg-blue-500 text-white rounded-md px-2 py-1'>Upload Images</button></Link>
            <Link to="/upload-certificate" > <button className='bg-blue-500 text-white rounded-md px-2 py-1'>Upload certificate</button> </Link>
            <button className='bg-blue-500 text-white rounded-md px-2 py-1' onClick={handleLogout} >Logout Admin</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard