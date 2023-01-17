import {
  Autocomplete,
  Button,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';





// import { useGetProductsQuery, useUpdatePostMutation } from "../../services/stockin";
import MaterialTable from "material-table";
import InventoryNavbar from "../Navbar/InventoryNavbar";
const columns = [
  { field: "id", headerName: "SrNO", width: 100 },
  { field: "itemcode", headerName: " Itemcode", width: 130 },
  { field: "suplierNo", headerName: " SuplierNo", width: 130 },
  { field: "suplier", headerName: " Suplier", width: 130 },
  { field: "addproduct", headerName: " Addproduct", width: 130 },
  { field: "typeproduct", headerName: " Product Type", width: 130 },
  { field: "productunit", headerName: " Product Unit", width: 130 },
  { field: "Price", headerName: " Price", width: 130 },
  { field: "quantity", headerName: " Quantity", width: 130 },
  { field: "expriy", headerName: " Expriy", width: 130 },];
//  var array=[]
// var b=[]
var ProductsNames = [];
var productTypes = [];
var Units = [];

const Stockin = () => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const [supplierId, setSupplierId] = useState();
  const [productName, setProductName] = useState();
  const [productType, setProductType] = useState();
  const [unit, setUnit] = useState();
  const [array, setArray] = useState([])
  const [b, setB] = useState([])
  const [obj, setObj] = useState([])
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNoYXJqZWVsc2siLCJfaWQiOiI2M2JmZmE2OTY2ZWJiYzg0MGQ4ZmZiODkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM1MzEyNzd9.9TU3mS2SgZLA8P3Rqop9z83fX0iWsPC1_UBi8HJXAEw"


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    if (event.target.value >= 0) {
    }

  };

  const onSubmit = (stock) => {

    var obj = {
      supplierId,
      productName,
      productType,
      unit,
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


  const allProduct = async () => {
    const res =  await axios.get("http://localhost:3002/api/product/getAllProducts",{headers:{token:`${accessToken}`}})
    .then(res=>{
      setProducts(res.data);
      console.log(products,'products')
    console.log(res.data,'res.data')
    if (res.data !== undefined) {
      res.data.result.map((item) => {
        ProductsNames.push(item.name);
        console.log(item.name,'itemkkhfhhfhfdhfdhfhfhfgd')
        productTypes.push(item.type);
        Units.push(item.unit);
      });
   }
    })

    


   


  };

  const getitem = async () => {
    const re = await axios.post("http://localhost:3002/api/stock/stockIn",array,{headers:{token:`${accessToken}`}});
     console.log(re.data, "reData");
    setItem(re.data,'post data');
  };     
  console.log(item, "item");
  useEffect(() => {
    allProduct();
     getitem();
     onSubmit();
  }, []);
  // console.log(array, 'array')
  return (
    <div className="">
       <InventoryNavbar/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h1 className="text-center my-8 font-bold text-2xl">Stock In</h1>
            <Container>
              <Stack direction="row" spacing={2}>
                <TextField
                  type={"number"}
                  value={1}
                  onChange={(t) => {
                    handleChange(t);
                  }}
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Item code "
                  variant="outlined"
                  {...register("docNo", { required: true, maxLength: 20 })}
                />
                <TextField
                  type="number"
                  //  value={value}
                  // disablePortal
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Supplier Doc No"
                  variant="outlined"
                  {...register("supplierDocNo", {
                    required: true,
                    maxLength: 20,
                  })}
                />

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={supplierId}
                  onChange={(event, newValue) => {
                    setSupplierId(newValue);
                  }}
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                  options={ProductsNames}
                  sx={{ width: 200 }}
                  //  {...register("suplier", { required: true, maxLength: 20 })}
                  renderInput={(params) => (
                    <TextField {...params} label="Supplire" />
                  )}
                />

                <Autocomplete
                  id="combo-box-demo"
                  value={productName}
                  onChange={(event, newValue) => {
                    setProductName(newValue);
                  }}
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                   options={ProductsNames}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Add Products " />
                  )} />

                <Autocomplete
                  id="combo-box-demo"
                  value={productType}
                  onChange={(event, newValue) => {
                    setProductType(newValue);
                  }}
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                   options={productTypes}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Type" />
                  )} /> </Stack>

              <Stack direction="row" spacing={2} mt="10px">
                <Autocomplete
                  id="combo-box-demo"
                  // disablePortal
                  value={unit}
                  onChange={(event, newValue) => {
                    setUnit(newValue);
                  }}
                  options={Units}
                  type="number"
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Unit" /> )}/>

                <TextField
                  {...register("Price")}
                  type="number"
                  name="Price"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  {...register("price", { required: true, maxLength: 20 })}/>

                <TextField
                  type="number"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="QUANTITY"
                  variant="outlined"
                  {...register("quantity", { required: true, maxLength: 20 })}/>


                <TextField
                  type="number"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Expiry"
                  variant="outlined"
                  {...register("expiry", { required: true, maxLength: 20 })}/>
                   </Stack>


              <div className="mt-3 ali">
                <center>
                  <Button type="submit" variant="contained" alignitems="center"> Add </Button>
                </center>
              </div>
            </Container>
          </div>

        </div>

        <div className="mx-3">
          <div
            style={{
              height: 800,
              width: "100%",
              marginTop: "10px",
              padding: "5px",
            }}
          >



            <div >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                     

                      <TableCell align="right">Id</TableCell>
                      <TableCell align="right">SuplierNo</TableCell>
                      <TableCell align="right">Suplier</TableCell>
                      <TableCell align="right">Addproduct</TableCell>
                      <TableCell align="right">Product Type</TableCell>
                      <TableCell align="right">Product Unit</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right"> Quantity</TableCell>
                      <TableCell align="right"> Expriy</TableCell>
                      <TableCell align="right"> Total</TableCell>
                      <TableCell align="right"> Delete</TableCell>


                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {b[0]?.map((row, id) => (
                      <TableRow key={id}>
                        <TableCell align="right">{id + 1}</TableCell>
                        <TableCell align="right">{row.docNo}</TableCell>
                        <TableCell align="right">{row.supplierId}</TableCell>
                        <TableCell align="right">{row.productName}</TableCell>
                        <TableCell align="right">{row.productType}</TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.expiry}</TableCell>
                        <TableCell align="right">{row.quantity * row.Price}</TableCell>



                        <TableCell align="right">
                          <button align="right" onClick={()=>{
           setArray(array.filter((i)=> row.suplierNo !== i.suplierNo))
          
              }}>
          
             <DeleteIcon/>
              </button>
             
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>



            {console.log(b, 'kkkkk')}

          </div>
        </div>
        <div className='flex justify-center'>
          <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-2 ">Print </button></center>
          <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">Save </button></center>
          <center> <button type="submit" className=" text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-3">Grand Total = </button></center>
        </div>

      </form>
    </div>
  );
};
export default Stockin;