import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";

const Login = ({handleLogin, rerender, setRerender}) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [formErrors, setFormErrors] = useState([]);

	const loginUser = () => {
		if (email.length === 0) {
			alert('Please enter a email');
		} else if(password.length === 0) {
			alert('Please enter a password');
		} else if(username.length === 0) {
			alert('Please enter a username');
		} else{
			toast('Success. You are logged in!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				theme: "light",
			});
		}
	}

	const handleUsername = e => setUsername(e.target.value);
	const handleEmail = e => setEmail(e.target.value);
	const handlePassword = e => setPassword(e.target.value);

	function handleLoginResult(user) {
		if (user.hasOwnProperty('id')) {
		handleLogin(user);
		navigate("/");
		}
	}

	function handleLoginSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
	

		try {
			const requestOptions = {
				method: 'POST',
				credentials: "include",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
				username: username,
				email: email,
				password: password
				})
			};

	fetch('/api/login', requestOptions)
    .then((r) => {
    	setIsLoading(false);

    	if (r.ok) {
        	r.json().then((user) => {
          		handleLoginResult(user);
        	});
      	} else {
        	r.json().then((err) => {
          		setFormErrors(err.error);
        	});
      	}
	}) 
	}	catch (err) {
		setFormErrors(err.error);
	}
	}

	
  return (
	<div id='login-page'> 
	<ToastContainer />
	<p id='login-big' className='text-darkGray opacity-75'>
		Welcome to Elysian Salon
	</p>
	<p id='login-small' className='text-darkGray opacity-50'>Please login or register to view our site!</p>
	<div className="container h-100">
		<div className="container-fluid h-custom">
		<div id='login-form' className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 bg-greige">
    <div className="content">
      <form onSubmit={handleLoginSubmit}>
	  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
      <p id='login-title' className="text underline underline-offset-8"> Login Here </p>
	  </div>
	  <div className="field" id='login-input'>
		  <label id='login-label'>Username</label>
          <input
		  	placeholder='username'
            value={username}
            onChange={handleUsername}
            type="text"
            required
          />
          <span className="fas fa-user"></span>
        </div>
        <div className="field" id='login-input'>
		<label id='login-label'>Email</label>
          <input
		  	placeholder='email address'
            value={email}
            onChange={handleEmail}
            type="text"
            required
          />
          <span className="fas fa-user"></span>
        </div>
        <div className="field" id='login-input'>
		<label id='login-label'>Password</label>
          <input
		  	placeholder='password'
            value={password}
            onChange={handlePassword}
            type="password"
            required
          />
          <span className="fas fa-lock"></span>
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
        <button id='signin-button' className=" btn opacity-50 link-danger hover:underline" type="submit" onClick={loginUser}>Sign in</button>
        <div id='login-route' className="sign-up">
          Dont have an account with us? <a href="/register" id='nav-button' className=" btn opacity-50 link-danger hover:underline">Create Account</a>
        </div>
		</div>
      </form>
    </div>
	</div>
	</div>
	</div>
	</div>
  );
}

export default Login

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('')
    
//     const nav = useNavigate()

//     const logInUser = () => {
//         if(email.length === 0){
//           alert("Email can't be blank!");
//         }
//         else if(password.length === 0){
//           alert("password can't be blanklank!");
//         }
//         else if(username.length === 0){
//             alert("username can't be blanklank!");
//         }
//         else{
//             axios.post('http://127.0.0.1:5555/login', {
//                 username: username,
//                 email: email,
//                 password: password
//             })
//             .then(function (response) {
//                 console.log(response);
//                 //console.log(response.data);
//                 navigate("/");
//             })
//             .catch(function (error) {
//                 console.log(error, 'error');
//                 if (error.response === 401) {
//                     alert("Invalid credentials");
//                 }
//             });
//         }
//     }

//     return (
//       <div>
//           <div className="container h-100">
//             <div className="container-fluid h-custom">
//               <div className="row d-flex justify-content-center align-items-center h-100">
//                 <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                   <form>
//                     <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//                       <p className="lead fw-normal mb-0 me-3">Log Into Your Account</p>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example5" className="form-control form-control-lg" placeholder="Enter a valid username" />
//                       <label className="form-label" for="form3Example5">Username</label>
//                     </div>
   
//                     <div className="form-outline mb-4">
//                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
//                       <label className="form-label" for="form3Example3">Email address</label>
//                     </div>
   
//                     <div className="form-outline mb-3">
//                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
//                       <label className="form-label" for="form3Example4">Password</label>
//                     </div>
   
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="form-check mb-0">
//                         <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//                         <label className="form-check-label" for="form2Example3">
//                           Remember me
//                         </label>
//                       </div>
//                       <a href="#!" className="text-body">Forgot password?</a>
//                     </div>
   
//                     <div className="text-center text-lg-start mt-4 pt-2">
//                       <button type="button" className="btn btn-primary btn-lg" onClick={logInUser} >Login</button>
//                       <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
//                     </div>
   
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </div>
//     );
// }

// export default Login