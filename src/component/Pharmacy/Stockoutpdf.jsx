import React from 'react'
import logo from '../../images/banner.png'
import './pdf.css'
const Stockoutpdf = () => {
    return (
 
        // <div className=' bg-no-repeat' style={{backgroundImage:"url(images/water.jpg)"}}>
        <div className='background' >
    
        <img src={logo} alt="" className='w-[1000px] h-[133px] m-auto '/>
    
      <div class="grid grid-cols-2  ">
      <div className='font-bold text-lg relative my-3'>Date:</div>
      
      <div className='font-bold text-2xl relative right-28 underline'>Drug Issued Form</div>
    </div>
      <div class="grid grid-cols-2 gap-24 ">
      <div className='font-bold ml-1 '>Location:</div>
      
      <div className='font-bold text-lg'>Trainer:</div>
    </div>
      
      <div class="md:px-32 py-4  w-full">
      <div class="">
        <table class="min-w-full  border-collapse border border-slate-500">
          <thead class=" text-black">
            <tr>
              <th class=" text-center py-1 px-2 uppercase font-semibold text-sm border ">No</th>
              <th class="w-1/6  py-3 px-11 uppercase font-semibold text-center text-sm border ">Item</th>
              <th class="text-center py-3  uppercase font-semibold text-sm border ">Unit</th>
              <th class="text-center py-3 px-0  uppercase font-semibold text-sm border ">Quantity</th>
            </tr>
          </thead>
        <tbody class="text-gray-700">
          <tr>
            <td class=" text-center py-1 px-2 border ">1</td>
            <td class="w-1/6 text-left py-1 px-4 border ">Smith</td>
            <td class="text-center py-1 px-2 border ">56</td>
            <td class="text-center py-1 px-0  border ">34</td>
          </tr>
          <tr class="">
            <td class=" text-center py-1 px-2 border ">2</td>
            <td class="w-1/6 text-left py-1 px-4 border ">Johnson</td>
            <td class="text-center py-1 border ">434</td>
            <td class="text-center py-1 px-0  border ">23</td>
          </tr>
          <tr>
            <td class=" text-center py-1 px-2 border ">3</td>
            <td class="w-1/6 text-left py-1 px-4 border ">Williams</td>
            <td class="text-center py-1  border ">56</td>
            <td class="text-center py-1 px-0   border ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">4</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">5</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">6</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">7</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">8</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">9</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">10</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">11</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">12</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">13</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">14</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0 border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">15</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">16</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0  border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">17</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0  border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">18</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0  border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border ">19</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0  border  ">45</td>
          </tr>
          <tr class="">
            <td class="text-center py-1 px-2 border border-slate-900">20</td>
            <td class="w-1/2 text-left py-1 px-4 border ">Brown</td>
            <td class="text-center py-1 px-2 border ">22</td>
            <td class="text-center py-1 px-0  border  ">45</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-80 revert-layer ">
    
      <div className='font-bold ml-1 '>Sign:</div>
      
      <div className='font-bold text-lg'>Taken by:</div>
    </div>
        </div>
        
      )
}

export default Stockoutpdf