import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

const Cart = ({cartItems, onAddToCart, onRemove }) => {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 150 ? 25 : 15;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

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
                    <button id='empty-cart-button' className="btn bg-gray-100 text-dark-gray rounded-[12px] opacity-75 underline underline-offset-8">Browse Products</button>
                </Link>
            </div>}
            </div>
            <div className='grid grid-cols-4 gap-4'>
            {cartItems.map((item) => (
                <div className='grid-start-1 grid-span-2 column'>
                <div key={item.id} id='cart-card'>
                    <img id='cart-image' src={item.image} />
                    <div id='cart-name'>{item.name}</div>
                    <button onClick={() => onAddToCart(item)} id='add-one'>add +</button>
                    <button onClick={() => onRemove(item)} id='remove-one'>remove -</button>
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
                        <button id='nav-button' onClick={(e) => {e.preventDefault();toast.success('Thanks for pyour purchse. Check your email for a shipping confirmation.')}} className="btn bg-gray-100 text-dark-gray rounded-[12px] underline underline-offset-8">Checkout</button>
                    </form>
                    </div>
                </div>
            )}
            </div>
        </div>
        </>
    )
}

export default Cart