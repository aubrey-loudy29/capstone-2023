import { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from "react-router-dom"
import Divider from '@mui/material/Divider';

const Products = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate()
    const redirect = (id) => {
        navigate(`/products/${id}`)
    }

    useEffect(() => {
        const fetchProducts = async () => {
        const resp = await fetch("/api/products");
        if (resp.ok) {
            const products = await resp.json();
            setProducts(products);
        }
    };
    fetchProducts();
    }, []);

    const icon = (products) => {
    {products.map((p) => (
    coonsole.log(p.type)

    ))}
    return icon}

    return (
        <div>
            <p id='products-title'>
                <Divider />
                P R O D U C T S
                <Divider />
            </p>
            <ImageList cols={4} gap={40}>
            {products.map((p) => (
                <ImageListItem key={p.id} className='group/edit hover:opacity-75'>
                    <img 
                    src={p.image} 
                    srcSet={p.image}
                    alt={p.name} 
                    onClick={ () => {redirect(p.id) }}
                    loading="lazy"/>
                    <ImageListItemBar
                    id='small-products'
                    title={p.name}
                    subtitle={<span>${p.price}.00</span>}
                    position="below"
                    />
                    <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ...">
                    <span class="group-hover/edit:text-gray-700 ...">Call</span>
                    </a>
                </ImageListItem>
            ))}
            </ImageList>
        </div>
    );
}

export default Products