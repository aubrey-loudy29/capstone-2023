import { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
        const resp = await fetch("/api/services");
        if (resp.ok) {
            const services = await resp.json();
            setServices(services);
        }
    };
    fetchServices();
}, []);

    return (
        <div>
            <p id='services-title'>
                <Divider />
                S E R V I C E S
                <Divider />
            </p>
            <div className="bg-lightBlue rounded-3xl ">
                <p id='service-fine-print'> * The prices listed are starting prices. Prices are subject to change if 
                    the service takes longer than an allotted amount of time or if extra product 
                    is required to complete the service. *</p>
                {services.map((s) => (
                    <div key={s.id} id='service-col' className="columns-3 justify-items-start p-2">
                            <p id='service-name' className="text-darkBlue">{s.name}</p> 
                            <Divider id='service-divider'/>
                            <p id='service-price' className="text-darkBlue">${s.price}.00</p>
                        {/* <p>{s.length} minutes</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services