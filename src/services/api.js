import axios from 'axios'

const URL = "http://localhost:3002/api";
const Token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNoYXJqZWVsc2siLCJfaWQiOiI2M2JlODIxMTc0NGJmMzIzMWQ0Njg4MWQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM0NTQyMTZ9.yJI8gYgC5Ig0SDyltgO4rqbGjFxwaRoQqV1LnmGG3-o'
const authAxios = axios.create({
    baseURL:URL,
    headers:{ 
        Authorization: `Bearer ${Token}`
    }
    
})

export const loginUser=async(admin)=>{
    try {
        
        return await authAxios.post(`/user/loginUser`,admin)

    } catch (error) {
        console.log('Error While calling Admin Login',error);
        
    }
}

export const createUser = async(userData)=>{
    try {
        return await authAxios.post(`/user/createUser`,userData)
    } catch (error) {
        console.log('Error while calling AdminPanel',error)
        
    }
}

export const createProduct= async(addProducts)=>{
    try {
        return await authAxios.post(`/product/createProduct`,addProducts)
      
    } catch (error) {
        console.log('Error while calling CreateProducts',error);
        
    }
}

export const createSupplier = async(supplierData)=>{
     try {
        return await authAxios.post(`/supplier/createSupplier`,supplierData)
    } catch (error) {
        console.log('Error while calling Create Supplier',error);
    }
}

export const createLocation =async(locationData)=>{
        try {
            return await authAxios.post(`/location/createLocation`,locationData)
        } catch (error) {
            console.log('Error While calling CreateLocation',error);
            
        }
}