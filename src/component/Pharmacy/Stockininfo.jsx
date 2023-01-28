import { Autocomplete, Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import InventoryNavbar from '../Navbar/InventoryNavbar';

  
const columns = [
    { field: 'id', headerName: 'SrNO', width: 70 },
    { field: 'productsname', headerName: 'Products name', width: 130 },
    { field: 'productstype', headerName: 'Products type', width: 130 },
    {field: 'unit',headerName: 'unit',type: 'number',width: 90,},
    {field: 'Quantity',headerName: 'Quantity',type: 'number',width: 90,},
    {field: 'Price',headerName: 'Price',type: 'number',width: 90,},
    {field: 'total',headerName: 'total',type: 'number',width: 90,},
    {field: 'Expiry',headerName: 'Expiry',type: 'number',width: 90,},
  ];
  const rows = [
    { id: 1, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
    { id: 2, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },

  
  ];
const Stockininfo = () => {
  return (
    <div className=''>
        <InventoryNavbar/>
          <h1 className='text-center my-8 font-bold text-2xl'>Stock Info </h1>
        <Container>
        <Stack direction="row" spacing={2} flex justifyContent="center">
      {/* <TextField type="number" sx={{width:200}} id="outlined-basic" label="Supplier Doc No" variant="outlined"  />
      <TextField type="Date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
      <TextField type="text" sx={{width:200}} id="outlined-basic" label="Supplier Name" variant="outlined"  /> */}
<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Supplier Doc No
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Supplier Doc No"/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Date
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Date"/>
    </div>
    <div class="w-full  px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Supplier Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Supplier Name"/>
    </div>
  </div>


    </Stack>
    <Stack direction="row" spacing={2} mt="10px">






    </Stack>
    <div className='mt-3 ali'>


    </div>

        </Container>
<div className='mx-3'>
       
 <div style={{ height: 800, width: '100%', marginTop:'10px', padding:'5px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>

    </div>
  {/* <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">Print </button></center>  */}
    </div>
  )
} 

export default Stockininfo