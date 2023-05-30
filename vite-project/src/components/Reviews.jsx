import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFormik } from "formik"
import React from 'react'
import * as yup from "yup"

const Reviews = ({currentUser}) => {
      
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    
    const formSchema = yup.object().shape({
        text: yup.string().required("Must enter text"),
        user_id: yup.number().required("Must be logged in"),
    })
    const formik = useFormik({
        initialValues: {
            text:'',
            user_id: currentUser.id,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((res) => {
                if(res.ok) {
                    res.json().then(post => {
                        setToggle(!toggle)
                        navigate(`/`)
                    })
                }
            })
            console.log(currentUser.id)
        },
    })
    console.log(currentUser)
    return (
        <div>
            <p id='locations-title'>
            <Divider />
               THANK YOU!
            <Divider />
            </p>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <div id='review-form' className="columns-1 justify-items-start p-2 bg-greige rounded">
                <div>
                    <label>
                        <p>
                        <textarea placeholder='Write your review here...'type='text' rows='4' cols='50' name='text' value={formik.values.text} onChange={formik.handleChange} />
                        </p>
                    </label>
                </div>
                <p id='review-writer' className='text-brown opacity-75'> ~ {currentUser.username}</p>
                <button id='review-button' className='btn bg-tan opacity-50 rounded-[12px]' type='input' >Submit</button>
            <p className='text-brown' id='review-message'>
                Thank you so much for writing a review! It helps us improve the quality 
                of our salon and provide the best experience possible to our clients!
            </p>
            </div>
            </form>
        </div>
    )
}

export default Reviews