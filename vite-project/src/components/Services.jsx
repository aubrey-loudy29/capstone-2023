import { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import FilterService from './FilterService'

const Services = ({serviceArray}) => {

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
                {serviceArray.map((s) => (
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