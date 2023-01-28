import React, { useEffect, useState } from 'react'
import logo from '../../images/banner.png'
import './pdf.css'
import Stockout from './Stockout'
import {useLocation} from 'react-router-dom';
import './stockoutpdf.css'



const Stockoutpdf = () => {


useEffect(()=>{
 window.print()
},[])


  const location = useLocation();
  let item =location.state.data
  const ref = React.createRef();
console.log(location.state.data,'Stockout')
  
 console.log(item,'data')






    return (
      
        // <div className=' bg-no-repeat' style={{backgroundImage:"url(images/water.jpg)"}}>
      
        



     <div className='background'>


        {/* <img src={logo} alt="" className='w-[1000px] h-[133px] m-auto '/> */}
    
      {/* <div className="grid grid-cols-2  report-header ">
      <div className='font-bold text-lg relative my-3 report-header-cell'>Date:</div>
      
      <div className='font-bold text-2xl relative right-28 underline  report-header-cell'>Drug Issued Form</div>
    </div>
      <div className="grid grid-cols-2 gap-24   report-header-cell">
      <div className='font-bold ml-1   report-header-cell'>Location:</div>
      
      <div className='font-bold text-lg  report-header-cell'>Trainer:</div>
    </div> */}
      
      <div className="md:px-32 py-4  w-full">
      <div className="">
        <table className="min-w-full  border-collapse border border-slate-500  report-container">
          {/* <thead className=" text-black">
            <tr>
              <th className=" text-center py-1 px-2 uppercase font-semibold text-sm border  ">No</th>
              <th className="w-1/6  py-3 px-11 uppercase font-semibold text-center text-sm border report-header-cell ">Item</th>
              <th className="text-center py-3  uppercase font-semibold text-sm border report-header-cell ">Unit</th>
              <th className="text-center py-3 px-0  uppercase font-semibold text-sm border  report-header-cell">Quantity</th>
            </tr>
          </thead> */}



          <thead className="report-header text-black">
        <img src={logo} alt="" className='w-[1000px] h-[133px] m-auto '/>

                <tr>
                    <th className="report-header-cell">
                        <div className="header-info">
                        <div className="grid grid-cols-2  report-header ">
      <div className='font-bold text-lg relative my-3 report-header-cell'>Date:</div>
      
      <div className='font-bold text-2xl relative right-28 underline  report-header-cell'>Drug Issued Form</div>
    </div>
      <div className="grid grid-cols-2 gap-24   report-header-cell">
      <div className='font-bold ml-1   report-header-cell'>Location:</div>
      
      <div className='font-bold text-lg  report-header-cell'>Trainer:</div>
    </div>
                            
                        </div>
                    </th>
                </tr>
           
           <tr className='mt-44'>
              <th className=" text-center py-1 px-2 uppercase font-semibold text-sm border mt-3  ">No</th>
              <th className="w-1/6  py-3 px-11 uppercase font-semibold text-center text-sm border report-header-cell ">Item</th>
              <th className="text-center py-3  uppercase font-semibold text-sm border report-header-cell ">Unit</th>
              <th className="text-center py-3 px-0  uppercase font-semibold text-sm border  report-header-cell">Quantity</th>
            </tr>
           
               
                </thead>
        {/* <tbody className="text-gray-700">

          
         

          {
            item?.map((datas,i)=>{
            return(
             
                 <tr key={i} >
            <td className=" text-center py-1 px-2 border ">{i+1}</td>
            <td className="w-1/6 text-left py-1 px-4 border ">{datas.productName}</td>
            <td className="text-center py-1 px-2 border ">{datas.unit}</td>
            <td className="text-center py-1 px-0  border ">{datas.quantity}</td>
          </tr> 
          
         

             
            )
           })
          }
          
        </tbody> */}



<tfoot className="report-footer grid grid-cols-2 gap-80 revert-layer">
                <tr>
                    <td className="report-footer-cell">
                        <div className="footer-info">
                            <div className={"page-footer"}>
                            <div className='font-bold ml-1 '>Sign:</div>
      
      <div className='font-bold text-lg'>Taken by:</div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tfoot>
      
    


        <tbody className="report-content text-gray-700">
        {
            item?.map((datas,i)=>{
            return(
             
                 <tr key={i} >
                    <td className="report-content-cell text-center py-1 px-2 border "><div className="main"> {i+1}</div> </td>
                    <td className="report-content-cell w-1/6 text-left py-1 px-4 border"><div className="main"> {datas.productName}</div> </td>
                    <td className="report-content-cell text-center py-1 px-2 border "><div className="main"> {datas.unit}</div> </td>
                    <td className="report-content-cell text-center py-1 px-0  border"><div className="main"> {datas.quantity}</div> </td>

                </tr>
                 )
                })
               }
                </tbody>
        </table>
      </div>
    </div>
    
    
    </div>
       
        
      )
}

export default Stockoutpdf





