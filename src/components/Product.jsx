import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slice/cartSlice';
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

const Product = ({product}) => {
  const dispatch = useDispatch(); 

  return (
    <>
                 <MDBCol size='4' key={product.id} >
                 <MDBCard>
                     <MDBCardImage src={product.thumbnail} position='top' alt='...' />
                     <MDBCardBody>
                         <MDBCardTitle>{product.title}</MDBCardTitle>
                         <MDBCardText>
                         {product.description.slice(0,45)}
                         </MDBCardText>
                         <MDBBtn href='#' onClick={() => dispatch(addToCart(product))}>Add To Cart</MDBBtn>
                     </MDBCardBody>
                 </MDBCard>
                 </MDBCol>
    </>
  )
}

export default Product