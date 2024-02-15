import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearMessage, minusToCart, removeFromCart } from '../store/slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const { cart, totalQuantity, totalPrice, message } = useSelector((state) => {return state.allcart});
    console.log(cart);
    const notify = (msg) => toast.warn(msg, {
      position: "top-center",
    });
    if ( message !== null ) {notify(message)} ; 
    useEffect(() => {
      dispatch(clearMessage());
    },[message]);
    if ( cart.length == 0 ) return (<div> <h1>Add item to your cart </h1></div>) ; 
 
  return (
    <div>
      <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cart.length} items</h5>
          </div>
          <div className="card-body">
            
            {/* Single item */}
            {
              cart.map((cartItem, index) => {
                return (
             
            <div className="row" key={cartItem.id}>
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* Image */}
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={cartItem.thumbnail}
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)' }} ></div>
                  </a>
                </div>
                {/* Image */}
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* Data */}
                <p><strong>{cartItem.title}</strong></p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item"
                  onClick={() => dispatch(removeFromCart(index))}>
                  <i className="fas fa-trash"></i>
                </button>
                {/* Data */}
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* Quantity */}
                <div className="d-flex mb-4" style={{maxwidth: '300px' }} >
                  <button className="btn btn-primary px-3 me-2"
                   onClick={() => dispatch(minusToCart(index))}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value={cartItem.quantity} type="number" className="form-control" />
                    <label className="form-label" for="form1">Quantity</label>
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onClick={() => dispatch(addToCart(cartItem))}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                {/* Quantity */}

                {/* Price */}
                <p className="text-start text-md-center">
                  <strong>${cartItem.quantity * cartItem.price}</strong>
                </p>
                {/* Price */}
              </div>
              <hr className="my-4" />
            </div>
             )    // end of return 
             })      // end of loop
            }
            {/* Single item */}
         
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity
                <span>{totalQuantity}</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span><strong>{totalPrice}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<ToastContainer />

    </div>
  )
}

export default CartPage