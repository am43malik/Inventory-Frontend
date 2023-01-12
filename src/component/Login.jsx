import React from 'react'
import FirstpageNavbar from './Navbar/FirstpageNavbar'
import inventory from '../images/inventory.jpg'
const Login = () => {
  return (
   
    <div >
      <FirstpageNavbar/>


        {/* <div className="flex flex-col h-screen bg-center bg-cover bg-no-repeat">
			<div className="grid place-items-center mx-auto p-20 sm:my-auto bg-white rounded-3xl space-y-10">
            <h1 className="text-5xl font-semibold text-blue-500">Login to Admin or Users</h1>
    <div className="flex items-center justify-center space-x-3">

    <Link to ="/adminlogin" > <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
       
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
            <span>Sign in to admin</span>
    </button></Link>
  
    
    <Link to ="/userlogin" > <button className="bg-pink-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>

        <span>Login to User</span>
    </button> </Link>
    </div>
			</div>
		</div> */}
    

      <div  className=''>

     <center><img src={inventory} alt="" className='h-screen '/></center>   
      </div>
    </div>
  )
}

export default Login