import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

const ProductCard = ({onAddToCart}) => {
    const [proCard, setProCard] = useState({})
    let {id} = useParams()
    const {name, image, price, description} = proCard
    const navigate = useNavigate()
    const [ isAlertVisible, setIsAlertVisible ] = useState(false)

    useEffect(() => {
        fetch(`/api/products/${id}`)
        .then((resp) => resp.json())
        .then((data) => setProCard(data))
    }, [id])

    return (
        <div id='product-card'>
            <h1 id='product-card-name'>{name}</h1>
            <img id='product-card-image' src={image} alt={name} onClick={() => navigate('/products')} />
            <p id='product-card-price'>${price}.00</p>
            <p id='product-card-desc'>{description}</p>
            <Link to={"/products"}>
            <button id='product-button' className='underline underline-offset-2' onClick={() => onAddToCart(proCard)} >Add To Cart</button>
            {isAlertVisible && <div className='alert-container'>
                <div className='alert-inner'>Alert! Alert!</div>
            </div>}
            </Link>
        </div>
    )
}

export default ProductCard