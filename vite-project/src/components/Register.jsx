import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import * as yup from "yup"

const Register = ({handleLogin}) => {
    const [username, setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();

	const formSchema = yup.object().shape({
        email: yup.string().required("Must enter email"),
        username: yup.string().required("Must enter username"),
		password: yup.string().required("Must enter password"),
    })

	function handleLoginResult(user) {
		if (user.hasOwnProperty('id')) {
		handleLogin(user);
		navigate("/");
		}
	}
     
    const registerUser = () => {
        axios.post('http://127.0.0.1:5555/signup', {
            username: username,
            email: email,
            password: password
        })
        .then(function (user) {
			handleLoginResult(user)
            navigate("/login");
        })
        .catch(function (error) {
            console.log(error, 'error');
        });
    };
     
    return (
      	<div id='login-page'> 
     	<p id='login-big' className='text-darkGray opacity-75'>
		Welcome to Elysian Salon
		</p>
		<p id='login-small' className='text-darkGray opacity-50'>Please login or register to view our site!</p>
            <div className="container h-100">
              <div className="container-fluid h-custom">
                  <div id='login-form' className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 bg-greige">
                    <form onSubmit={registerUser}>
                      <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p id='login-title'className="lead fw-normal mb-0 me-3 underline underline-offset-8 text-brown">Create Your Account</p>
                      </div>

                      <div className="form-outline mb-4">
                        <label id='login-label' for="form3Example5">Username</label>
                        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example5" className="form-control form-control-lg" placeholder="username" />
                      </div>
     
                      <div className="form-outline mb-4">
                        <label id='login-label' for="form3Example3">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="email address" />
                      </div>
     
                      <div className="form-outline mb-3">
                        <label id='login-label' for="form3Example4">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="password" />
                      </div>
     
                      <div className="text-center text-lg-start mt-4 pt-2">
						
                        <button type="button" id='signin-button' className="btn btn-primary opacity-50 btn-lg" onClick={() => registerUser()} >Sign Up</button>
						
                        <p id='login-route' className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/login" id='nav-button' className=" btn opacity-50 link-danger">Login Here</a></p>
                      </div>
     
                    </form>
                  </div>
                </div>
            </div>
        </div>
    );
    
}

export default Register