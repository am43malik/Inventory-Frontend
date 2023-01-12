import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../images/logo1.jfif'
import logo from '../../images/inventory.jpg'
import { createSupplier } from '../../services/api'

import AdminNavbar from '../Navbar/AdminNavbar'
const Addsuppliers = () => {

    const defaultvalue = {
        name:"",
        location:"",
        contact:""
    }
    const [supplierData,setSupplierData]=useState(defaultvalue)


    const onValueChange =(e)=>{
        setSupplierData({...supplierData,[e.target.name]:e.target.value})
        console.log(supplierData);
    }


    const addSuppliersDetails= async()=>{
        try {
           await createSupplier(supplierData) 
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
         <AdminNavbar/>
        <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900 ">
  <img className="w-56 h-32 mr-6" src={logo} alt="logo"/>
         
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-10 dark:border-gray-600">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                 Add Supplier
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Supplier Name</label>
                      <input type="text" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Company Name" required="" onChange={(e)=>onValueChange(e)}/>
                  </div>
                  <div>
                      <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Location</label>
                      <input type="text" name="password" id="password" placeholder="Enter Your Location" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>onValueChange(e)}/>
                  </div>
                  <div>
                      <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Contact</label>
                      <input type="text" name="contact" id="password" placeholder="Enter Contact Number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>onValueChange(e)}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                       
                         
                      </div>

                  </div>
                   
                    <button type="button" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={()=>addSuppliersDetails()}>Submit</button>
                
            
               
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Addsuppliers