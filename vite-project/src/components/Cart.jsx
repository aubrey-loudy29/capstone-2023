import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import React, { useState } from "react";

const Cart = ({cartItems, onAddToCart, onRemove }) => {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 150 ? 25 : 15;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const [modal, setModal] = useState(false);

    const toggleModal = (e) => {
        setModal(!modal);
        // e = e || window.event;
        e.preventDefault();
    }

    const reset = () => {
        setModal(!modal);
    }

    return (
        <>
            <ToastContainer />
        <div>
            <p id='locations-title'>
            <Divider />
                Y O U R C A R T
            <Divider />
            </p>
            <div>
                {cartItems.length === 0 && <div>
               
                <p id='empty-cart' className='text-darkGray opacity-50'>Your Cart is Empty</p>
                <Link to={"/products"}>
                    <button id='empty-cart-button' className="btn bg-gray-100 hover:opacity-100 text-dark-gray rounded-[12px] opacity-50 underline underline-offset-8">Browse Products</button>
                </Link>
            </div>}
            </div>
            <div className='grid grid-cols-4 gap-4'>
            {cartItems.map((item) => (
                <div className='grid-start-1 grid-span-2 column'>
                <div key={item.id} id='cart-card'>
                    <img id='cart-image' src={item.image} />
                    <div id='cart-name'>{item.name}</div>
                    <button onClick={() => onAddToCart(item)} id='add-one' className='hover:underline'>add +</button>
                    <button onClick={() => onRemove(item)} id='remove-one' className='hover:underline'>remove -</button>
                <div id='cart-qty'>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
                </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <div id='total-checkout' className='grid-start-3 grid-span-1'>
                    <div className='column'>
                        <div id='total-price'> Product - </div>
                        <div id='total-dollar'>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='column'>
                        <div id='total-price'> Tax -</div>
                        <div id='total-dollar'>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='column'>
                        <div id='total-price'> Shipping -</div>
                        <div id='total-dollar'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='column'>
                        <div id='total-total' className='strong'> Total :</div>
                        <div id='total-dollar'>${totalPrice.toFixed(2)}</div>
                    </div>
                    <div className='checkout-button'> 
                    <form>
                        <button id='nav-button' onClick={toggleModal} className="btn bg-gray-100 hover:bg-tan hover:opacity-50 text-dark-gray rounded-[12px] underline underline-offset-8">Checkout</button>
                    </form>
                    {modal && (
                        <div className='modal'>
                        <div id='modal' className="overlay">
                            <div id="modal-content" className='bg-blue p-5'>
                            <h1 id='modal-title'className='text-brown'> Proceed with Checkout? </h1>
                            <Link to={'/checkedout'}>
                            <button id='modal-button' onClick={reset} className="btn bg-tan hover:bg-tan hover:text-greige hover:opacity-100 text-darkGray opacity-75 rounded-[12px]"> Yes </button>
                            </Link>
                            <button id='modal-button' className="btn hover:bg-tan hover:text-greige hover:opacity-100 bg-tan text-darkGray opacity-75 rounded-[12px]" onClick={toggleModal} > No </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            )}
            </div>
        </div>
        </>
    )
}

export default Cart