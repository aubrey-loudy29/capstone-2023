import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFormik } from "formik"
import React from 'react'
import * as yup from "yup"

const Reviews = () => {
      
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();
    const formSchema = yup.object().shape({
        title: yup.string().required("Must enter a title"),
        budget: yup.number().positive()
    })
    const formik = useFormik({
        initialValues: {
        text:'',
        // user_id: user.Id,
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
        },
    })
    return (
        <div>
            <p id='locations-title'>
            <Divider />
               THANK YOU!
            <Divider />
            </p>
            <form>
            <div id='review-form' className="columns-1 justify-items-start p-2 bg-greige rounded">
                <div>
                    <label>
                        <p>
                        <textarea placeholder='Write your review here...'type='text' rows='4' cols='50' name='text' value={formik.values.text} onChange={formik.handleChange} />
                        </p>
                    </label>
                </div>
                <button id='review-button' className='btn bg-tan opacity-50 rounded-[12px]' type='input'>Submit</button>
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