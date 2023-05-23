import { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';

const Stylists = () => {
    const [stylists, setStylists] = useState([]);

    useEffect(() => {
        const fetchStylists = async () => {
        const resp = await fetch("/api/stylists");
        if (resp.ok) {
            const stylists = await resp.json();
            setStylists(stylists);
        }
    };
    fetchStylists();
}, []);

    return (
        <div>
            <p id='stylists-title'>
                <Divider />
                S T Y L I S T S
                <Divider />
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-6 gap-4
                h-350 w-200 ">
            {stylists.map((sty) => (
                <div key={sty.id} id='stylist-card' className='bg-lightBlue text-darkGray justify-items-center '>
                    <img id='stylist-image'src={sty.image} alt={sty.name} className='rounded-t-3xl'/>
                    <h1 id='stylist-name' position="below">{sty.name}</h1>
                    <h1 id='stylist-bio' position="below">{sty.bio}</h1>
                    <h1 id='stylist-loca' position="below">Works at: {sty.locations.name}</h1>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Stylists

// 'block flex justify-top flex-column h-80 bg-beige text-brown rounded-t-3xl'