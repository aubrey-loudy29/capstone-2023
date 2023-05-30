import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
     
    const registerUser = () => {
        axios.post('http://127.0.0.1:5555/signup', {
            username: username,
            email: email,
            password: password
        })
        .then(function (response) {
             console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response === 401) {
                alert("Invalid credentials");
            }
        });
    };
     
    return (
        <div>
            <div className="container h-100">
              <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div id='login-form' className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 bg-greige">
                    <form>
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
                        <button type="button" id='nav-button' className="btn btn-primary opacity-50 btn-lg" onClick={() => registerUser()} >Sign Up</button>
                        <p id='login-route' className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/login" id='nav-button' className=" btn opacity-50 link-danger">Login Here</a></p>
                      </div>
     
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
    
}

export default Register