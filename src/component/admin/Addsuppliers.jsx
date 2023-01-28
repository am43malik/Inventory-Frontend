import React from 'react'
import { useState } from 'react'

import logo from '../../images/inventory.jpg'

import { useForm } from 'react-hook-form'
import axios from 'axios'
import AdminNavbar from '../Navbar/AdminNavbar'
import { useEffect } from 'react'
const Addsuppliers = () => { 
  const [isValid, setIsValid] = useState(false);
  const [value ,setValue]=useState([])

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNoYXJqZWVsc2siLCJfaWQiOiI2M2JmZmE2OTY2ZWJiYzg0MGQ4ZmZiODkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM1MzEyNzd9.9TU3mS2SgZLA8P3Rqop9z83fX0iWsPC1_UBi8HJXAEw"
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async(data,event) => {
      try {
        
        const res= await axios.post('http://localhost:3002/api/supplier/createSupplier', data,
        {headers:{token:`${accessToken}`}})
        .then(response=>{
        console.log(response, 'res')
      })
      setIsValid(true);
      setTimeout(() => {
          setIsValid(false);
      }, 1000);
        // alert("Supplier Add succsefully")
        event.target.reset();
      } catch (error) {
        alert(error)
        
      }

      
      
  }
 
  
  return (
    <div>
         <AdminNavbar/>

        <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  {isValid  &&
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3rounded relative" role="alert">
      <strong class="font-bold">Add supplierrs successfully!</strong>
  
 
    </div>
      
}
  <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900 ">
  <img className="w-56 h-32 mr-6" src={logo} alt="logo"/>
         
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-10 dark:border-gray-600">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                 Add Supplier
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Supplier Name</label>
                      <input type="text" {...register("name", { required: true })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Company Name" required />
                  </div>
                  <div>
                      <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Location</label>
                      <input type="text" {...register("location", { required: true })} id="password" placeholder="Enter Your Location" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div>
                      <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Contact</label>
                      <input type="number" contact {...register("contact", { required: true })} id="password" placeholder="Enter Contact Number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                       
                         
                      </div>

                  </div>
                   
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Submit</button>
                
            
               
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Addsuppliers