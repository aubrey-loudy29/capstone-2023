import { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
        const resp = await fetch("/api/locations");
        if (resp.ok) {
            const locations = await resp.json();
            setLocations(locations);
        }
    };
    fetchLocations();
}, []);

    return (
        <div>
            <p id='locations-title'>
            <Divider />
                L O C A T I O N S
            <Divider />
            </p>
            <div className="columns-2 justify-items-center">
            {locations.map((l) => (
                    <div key={l.id} id='locations-columns' className="flex grid justify-top flex-col w-80 h-100">
                    <img id='location-image' src={l.image} alt={l.name}/>
                    <p id='location-name' >{l.name}</p>
                    <p id='location-address' >{l.address}</p>
                    </div>
            ))}
            </div>
        </div>
    );
}

export default Locations