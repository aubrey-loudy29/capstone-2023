import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { useFormik } from "formik"
import Dropdown from 'react-dropdown';

const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
};

const BookApt = ({currentUser}) => {
    const [value, setValue] = React.useState('');
    const [stylists, setStylists] = useState([]);
    const [services, setServices] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [showService, setShowService] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [rerender, setRerender] = useState(0)
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([])
    
    const formSchema = yup.object().shape({
        stylist: yup.string().required("Must pick a stylist"),
        service: yup.string().required("Must pick a service"),
        date: yup.string().required("Must pick a date."),
        time: yup.string().required("Must pick a time."),
        user_id: yup.number().required("Must be logged in"),
    })

    const formik = useFormik({
        initialValues: {
            stylist:'',
            service:'',
            date:'', 
            time:'',
            user_id: currentUser.id,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values)
            fetch('/api/appointments', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((res) => {
                if(res.ok) {
                    const newAppointment= res.json().then(post => {
                        setToggle(!toggle)
                        navigate(`/`)
                    })
                    setAppointments(oldReviews => [...oldReviews, newAppointment])
                }
            })
        },
    })

    // dropdown for stylists

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.name;
        }
        return (
            <div id ='place-holder'>Select Stylist...</div>
        )
    };

    const onItemClick = (stylists) => {
        setSelectedValue(stylists);
    }

    const isSelected = (stylists) => {
        if (!selectedValue) {
            return false
        }
        return selectedValue.name === stylists.name;
    }

    console.log(selectedValue)
    console.log(selectedService)

    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        }
    });
    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }

    //dropdown for service
    const filteredService = () => {
        if (selectedValue.type === 1) {
            return services.filter(service => service.type === 1)
        }
        return services.filter(service => service.type === 2)
    }

    const anotherDisplay = () => {
        if (selectedService) {
            return selectedService.name;
        }
        return (
            <div id ='place-holder'>Select Service...</div>
        )
    };

    const onServiceClick = (services) => {
        setSelectedService(services);
    }

    const isSelectedService = (services) => {
        if (!selectedService) {
            return false
        }
        return selectedService.name === services.name;
    }

    useEffect(() => {
        const handler = () => setShowService(false);

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        }
    });

    const handleServiceClick = (e) => {
        e.stopPropagation();
        setShowService(!showService);
    }

    //fetching database for stylists and services
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
    console.log(value)

    return (
        <div>
            <p id='locations-title'>
            <Divider />
               B O O K
            <Divider />
            </p>
        <div id='book-form' className='bg-greige'>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div id='book-dropdowns' className='flex centered'>
        <div className="dropdown-container">
            <div onClick={handleInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                    <div className="dropdown-tools">
                    <div className="dropdown-tool">
                    <Icon />
                    </div>
                    </div>
                </div>
                {showMenu && (
                <div className="dropdown-menu">
                    {stylists.map((sty) => (
                        <div 
                            onClick={() => onItemClick(sty)}
                            value={formik.values.stylist} 
                            onChange={formik.handleChange}
                            key={sty.id} 
                            className={`dropdown-item ${isSelected(sty) && "selected"}`}>
                                {sty.name}- {sty.job}
                        </div>
                        ))}
                </div>
                )}
            </div>
        <div className="service-dropdown-container">
            <div onClick={handleServiceClick} className="dropdown-input">
                <div className="dropdown-selected-value">{anotherDisplay()}</div>
                    <div className="dropdown-tools">
                    <div className="dropdown-tool">
                    <Icon />
                    </div>
                    </div>
                </div>
                {showService && ( 
                <div className="dropdown-menu">
                    {services.map((s) => (
                        <div 
                            onClick={() => onServiceClick(s)}
                            key={s.id} 
                            value={formik.values.service} 
                            onChange={formik.handleChange}
                            className={`dropdown-item ${isSelectedService(s) && "selected"}`}>
                                {s.name}
                        </div>
                        ))}
                </div>
                )}
            </div>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'TimePicker']}>
            <div id='date-picker'>
            <DatePicker
            label="Service Date"
            value={formik.values.date}
            onChange={(newValue) => setValue(newValue)}
            />
            </div>
            <div id='date-picker'>
            <TimePicker
            minutesStep={15}
            label="Service Time"
            value={formik.values.time}
            onChange={(newValue) => setValue(newValue)}
            />
            </div>
        </DemoContainer>
        </LocalizationProvider>
        <button id='book-button' type='input' className="btn bg-tan opacity-50 rounded-[10px]">Book Appointment</button>
        </form>
        </div>
        </div>
    )
}

export default BookApt;
