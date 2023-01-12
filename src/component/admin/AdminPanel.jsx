import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../images/logo1.jfif'
import AdminNavbar from '../Navbar/AdminNavbar'
import logo from '../../images/inventory.jpg'
import { useState } from 'react'
import { createUser } from '../../services/api'
const AdminPanel = () => {
  const defaultvalue={
    userName:"",
    password:"",
    department:"",
    role:"",

  }
  const [userData,setUserData]=useState(defaultvalue)

  const  onValueChange= (e)=>{
          setUserData({...userData,[e.target.name]:e.target.value})
          console.log(userData);
  }

 const  addAddminPanelDetails=async()=>{
    try {
      await createUser(userData)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <AdminNavbar/>
       <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900 ">
  <img className="w-56 h-32 mr-6 mt-2" src={logo} alt="logo"/>
         
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-10 dark:border-gray-600">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                 Admin Panel
              </h1>
              <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        User Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='userName' type="text" placeholder="Jane" onChange={(e)=>onValueChange(e)}/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Passwod
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name='password' placeholder="********"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Choose a Depratment
      </label>
      <select id="countries"  className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
            <option value="Pharmacy"name='department' onChange={(e)=>onValueChange(e)} >Pharmacy</option>
            <option value="Lab" name='department' onChange={(e)=>onValueChange(e)}>Lab</option>
            <option value="Hopital" name='department' onChange={(e)=>onValueChange(e)}>Hopital</option>
            <option value="Cleaner" name='department' onChange={(e)=>onValueChange(e)}>Cleaner</option>
            </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        assign a role to a user
      </label>
      <select id="countries" name='role' className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
            <option value="Pharmacy">Admin</option>
            <option value="Lab">User</option>
            </select>
    </div>
    <div className="w-full px-3 pt-5 ">
   
    <button type="button" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={()=>addAddminPanelDetails()}>Submit</button>
     
    </div>
    
  </div>

</form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default AdminPanel