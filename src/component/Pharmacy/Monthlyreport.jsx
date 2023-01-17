import React from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider,createTheme, Stack, TextField, Autocomplete  } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InventoryNavbar from '../Navbar/InventoryNavbar';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
var LocationNames = [];
var trainerNames = [];
var test =[]
const Monthlyreport = () => {
  const { useState } = React;
 
  const [columns, setColumns] = useState([
    { title: 'Sno', field: 'sno' },
    { title: 'Date', field: 'Date' },
    { title: 'Products Name/unit', field: 'productName' },
    { title: 'company Name', field: 'companyName' },
    { title: 'Qauntity', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Price', field: 'birthYear', type: 'numeric' },
    {title: 'total',field: 'birthCity',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },},
  ]);

  const [data, setData] = useState([]);
  const defaultMaterialTheme = createTheme();
  const [value, setValue] = React.useState();
  const [value1, setValue1] = React.useState();
  console.log(value);
  console.log(value1);
  const [b, setB] = useState([])
  const [LocationName, setLocationName] = useState([]);
  const [LocationId, setLocationId] = useState();
  const [trainerName, setTrainerName] = useState();
  

  const [array, setArray] = useState([])
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNoYXJqZWVsc2siLCJfaWQiOiI2M2JmZmE2OTY2ZWJiYzg0MGQ4ZmZiODkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM1MzEyNzd9.9TU3mS2SgZLA8P3Rqop9z83fX0iWsPC1_UBi8HJXAEw"

  
  const allLocation = async()=>{
    try {
     const res = await axios.get("http://localhost:3002/api/location/getAllLocations",{headers:{token:`${accessToken}`}}) 
   
   .then(res=>{
    setLocationName(res.data)
    if(res.data !== undefined)
    res.data.result.map((item)=>{
     LocationNames.push(item.name)
     trainerNames.push(item.trainerName)
    })
   })
   
    } catch (error) {
      console.log('Error in Get Locaion',error);
    }}







// Here  i am start Montly data tabel 
const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm();
 
const onSubmit = (stock) => {

  var obj = {
          value,
          value1,
    ...stock

  }
 
  array.push(obj)
  console.log(obj, 'obj')


};

const handelclick = () => {
   
  b.push(array)
  setB(b)


console.log(b, 'b')
// console.log(stock,'stock')
} 
    const MonthlyReportData = async()=>{
      try {
        
        const res = await axios.get("http://localhost:3002/api/stock/getMonthlyReport",{headers:{token:`${accessToken}`}})
          setData(res)
        console.log(data.data,"DAta")
      } catch (error) {
        console.log(error);
        
      }
    }


    useEffect(()=>{
        allLocation();
    },[])
  

  return (
  <>
      <InventoryNavbar/>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className='mx-6'>
       <Stack direction="row" spacing={2} margin="23px" justifyContent="center">
     {/* <TextField type="Date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  /> */}
     {/* <TextField type="Date"  format="yyyy-MM-dd HH:mm:ss" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  /> */}
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="From"
        value={value1}
        onChange={(newValue) => {
          setValue1(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        
      // inputFormat="YYYY-MM-DD" views={["day", "month", "year"]}
      format="yyyy-MM-dd"
      />
    </LocalizationProvider>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
       
        label="To"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        
        // inputFormat="YYYY-MM-DD" views={["day", "month", "year"]}
        format="yyyy-MM-dd"

      />
    </LocalizationProvider>
     <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={LocationId}
          onChange={(event,newValue)=>{
            setLocationId(newValue)
          }}
          getOptionLabel={(LocationName) => LocationName || ""}
          options={LocationNames}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Select Location" />}
          
        />
     <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={trainerName}
          onChange={(event,newValue)=>{
            setTrainerName(newValue)
          }}
          getOptionLabel={(LocationName) => LocationName || ""}
          options={trainerNames}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Select Traniner" />}
          
        />
    

      
      </Stack>
  <center> <button type="button" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2" onClick={()=>MonthlyReportData()}>Submit </button></center> 
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
      data={data}
      columns={columns}
    editable={{
        isEditable: rowData => rowData.date === data.date, // only name(a) rows would be editable
        isEditable: rowData => rowData.ProductsName === data.ProductsName,
        isEditable: rowData => rowData.companyName === data.companyName, // only name(b) rows would be deletable,
        isEditable: rowData => rowData.Qauntity === data.Qauntity,
        isEditable: rowData => rowData.Price === data.Price,
        isEditable: rowData => rowData.total === data.total,

     
        onRowAddCancelled: rowData => console.log('Row adding cancelled'),
        onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    /* setData([...data, newData]); */

                    resolve();
                }, 1000);
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                }, 1000);
            })
    }}
/>
{/* {console.log(rowData.date,'date')} */}
    </ThemeProvider>
  <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Print </button></center> 
  <center> <button type="submit" className=" text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Grand Total = </button></center> 

    </div>
    </form>
    </>
  )
}

export default Monthlyreport