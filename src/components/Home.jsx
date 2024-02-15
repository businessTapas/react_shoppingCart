import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAsyncProducts } from '../store/slice/ProductSlice';
import { getAllCategories } from '../store/slice/CategorySlice';
import { useState, useEffect } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import ProductList from './ProductList';

export default function Home() {
    const dispatch = useDispatch(); 
 
    const products =  useSelector((state) => { return state.allProduct });
    useEffect(() => {
      dispatch(fetchAllAsyncProducts(30));
    }, []);
   //console.log(data);
  /*  data.item.slice(0,4).map((product, key)=> {
      console.log(product);
      console.log('==================================')
   }); */
   const { categories } = useSelector((state) => {return state.allCategory});
   useEffect(() => {
   console.log('Navbar-----------category------');
   dispatch(getAllCategories());
 },[]);

   if (products.loading) {
    return <h2>...loading</h2>
   }

   if(products.error != null) {
    return <h1>{products.error}</h1>
   }
   
   const tempProducts = [];
   if ( products.item.length > 0 ) {
      for ( let i in products.item ) {
        let randomIndex = Math.floor( Math.random() * products.item.length );
        while ( tempProducts.includes( products.item[randomIndex] ) ) {
          randomIndex = Math.floor( Math.random() * products.item.length );
        }
        tempProducts[i] = products.item[randomIndex];
      }
   }
  return (
    <>
      <div className='container-fluid bgcolor1'>
         <div className='row'>
       <div className="justify-content-start text-start w-100 my-2">
        { categories && categories.length > 0 ? categories.map((category, index) => {
          return (
          <a  id={index} href="#">
            {category} &nbsp;
            </a> 
          )
          }) :  ''
        }
      </div>
        </div>
        </div>
      <div className='m-2'>
      <MDBContainer>
      { tempProducts && tempProducts.length > 0 ?
        <ProductList products = {tempProducts}/>
        : ''
      }
        </MDBContainer>
    </div>
    </>
  );
}