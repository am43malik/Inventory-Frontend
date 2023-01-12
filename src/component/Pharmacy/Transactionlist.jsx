import React from 'react'
import { Link } from 'react-router-dom'
import InventoryNavbar from '../Navbar/InventoryNavbar'


const Transactionlist = () => {
  return (
    <div>
        <InventoryNavbar/>
          <h1 className='text-center my-8 font-bold text-2xl'>Transection List</h1>
<div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                SNO
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Document Number
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Products Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Balance Quantity
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Stock Out
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Stock In
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Expiry date 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              10/11/2022
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1003
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Vitamic c
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                3
              </td>
          
         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
         <Link to= "/stockoutinfo">  3  </Link>
              </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <Link to= "/stockininfo">      1 </Link>
              </td> 
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                10/11/2022
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              10/11/2022
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              10044
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Vitamic c
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                50
              </td>
           <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
           <Link to= "/stockoutinfo">  3</Link>
              </td> 
             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             <Link to= "/stockininfo">     1</Link>
              </td> 
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                10/14/2022
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
  )
  
}

export default Transactionlist