import { createContext } from "react";
import React from 'react';
import axios from'axios';
import { toast } from "react-toastify";


export  const CartContext=createContext(null);

// export function CartContextProvider(props){
// console.log(props); // it is an object ,has a property called children which is the component who has called the provider and it is a child of the provider

//     return <h2>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h2>;
// }

export function CartContextProvider({children}){

    const addToCartContext=async(productId)=>{
        try{
            const token=localStorage.getItem('userToken');
            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId:productId}, // the body (should be written before the headers)
            {headers:{Authorization:`Tariq__${token}`}} //the headers,,, see the documentation for authorization link why we add 'Tariq__'     
            );
            if(data.message=='success'){
                toast.success('you have successfuly added the product to the cart!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });  
            }

            return data
        }
        catch(error){
            console.log(error);
        }

    }

    
    const getCartContext=async()=>{
        if(localStorage.getItem('userToken')){
       try{
        const token=localStorage.getItem('userToken');
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
        {headers:{Authorization:`Tariq__${token}`}})
        return data;
       }
       catch(error){
        console.log(error);
       }
    }
    }

    const removeItemContext=async(productId)=>{
        try{
        const token=localStorage.getItem('userToken');
        const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}}
        )
        return data;
        }
        catch(error){
            console.log(error);
        }
      }

        return (
            <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext}}>
                {children}
            </CartContext.Provider>
        )
    }