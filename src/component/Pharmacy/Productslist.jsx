import React from 'react'
import { Link } from 'react-router-dom'
import InventoryNavbar from '../Navbar/InventoryNavbar'


const Productslist = () => {
  return (
    <div>
        <InventoryNavbar/>
          <h1 className='text-center my-8 font-bold text-2xl'>Prodcts List</h1>
      
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
              Products Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Quantity
              </th>
            </tr>
          </thead>
          <tbody>
       
       <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <Link to="/transactionlist">    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Vitamin C Troy
              </td></Link> 
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               50
              </td>
            </tr> 
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Histamil 50 ML
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               67
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Nova Par
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               130
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Xylazine
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               78
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

export default Productslist



