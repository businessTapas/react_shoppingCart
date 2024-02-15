import React from 'react';
import Product from './Product';
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

const ProductList = ({products}) => {
  return (
    <>
         <MDBRow className='mb-3'>
                 { products.slice(0,19).map((product, key)=> {
                    let discountedPrice = (product.price) - (product.price * (product.discountPrice / 100));

                    return (
                        <Product key = {product.id} product = {{...product, discountedPrice}} />
                    )
             
                })  }  
            </MDBRow>
    </>
  )
}

export default ProductList