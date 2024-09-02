// // import React, { useState } from 'react'
// // import './signup.scss';
// // import logo from '../../../assets/logo/logo.webp';
// // import toast from 'react-hot-toast';
// // // import { Link } from 'react-router-dom';

// // export default function Signup() {

// //   const [data, setData] = useState(
// //     {
// //       name: "",
// //       surname: "",
// //       email: "",
// //       password: "",
// //     }
// //   );

// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟  >>>>>>>>>>>>>>>>
//   /**
//    * Handles the change of the input fields and updates the state accordingly
//    * @param {Event} e - The event object
//    */
//   const handleChange = (e) => {
//     // Spread the current state and update the specific key with the new value
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };
// //   const handleChange = (e) => {
// //     setData({
// //       ...data,
// //       [e.target.name]: e.target.value,
// //     });
// //   };
// <<<<<<<  99ad04ee-10ba-49fa-984a-740619a0faed  >>>>>>>

// //   const validate = () => {
// //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// //     if (!data.name || !data.surname || !data.email || !data.password) {
// //       toast.error("Please fill out all fields");
// //       return false;
// //     }

// //     if (!emailRegex.test(data.email)) {
// //       toast.error("Please enter a valid email");
// //       return false;
// //     }
// //     if (data.password.length < 8) {
// //       toast.error("Please must be at least 8 characters long.");
// //       return false;
// //     }
// //     if (!/[A-Z]/.test(data.password)) {
// //       toast.error("Please must include at least one uppercase letter.");
// //       return false;
// //     }
// //     if (!/[a-z]/.test(data.password)) {
// //       toast.error("Please must include at least one lowercase letter.");
// //       return false;
// //     }
// //     if (!/\d/.test(data.password)) {
// //       toast.error("Please must include at least one number.");
// //       return false;
// //     }
// //     if (!/[!@#?%&*]/.test(data.password)) {
// //       toast.error("Please must include at least one uppercase letter.");
// //       return false;
// //     }
// //     return true;
// //   };

// //   const handleSubmit = () => {
// //     if (validate()) {
// //       setData({
// //         name: "",
// //         surname: "",
// //         email: "",
// //         password: "",
// //       });
// //       toast.success("Signed up sucessfully!");
// //     }
// //   };
// //   return (
// //     <div className='signup'>
// //       <div className="logo">
// //         <img src={logo} alt="logo" loading='lazy' />
// //       </div>
// //       <div className="form">
// //         <div className="form-user">
// //           <div className="heading">
// //             <h2>hello this is Signup !!</h2>
// //           </div>
// //           <div className="form-item">
// //             <label htmlFor="name">Name</label>
// //             <input id="name" onChange={handleChange} type="text" value={data.name} name='name' placeholder='Enter your name' />
// //           </div>
// //           <div className="form-item">
// //             <label htmlFor="">Surname</label>
// //             <input id='surname' onChange={handleChange} type="text" value={data.surname} name='surname' placeholder='Enter your surname' />
// //           </div>
// //           <div className="form-item">
// //             <label htmlFor="">Email</label>
// //             <input id="email" onChange={handleChange} type="email" value={data.email} name='email' placeholder='Enter your email' />
// //           </div>
// //           <div className="form-item">
// //             <label htmlFor="">password</label>
// //             <input id='password' onChange={handleChange} type="password" value={data.password} name='password' placeholder='Enter your password' />
// //           </div>
// //           <div className="forgot">
// //             <a>Forgot Password?</a>
// //           </div>

// //           <div className="button">
// //             <button onClick={handleSubmit} >Sign up</button>
// //           </div>
// //           <div className="change-form">
// //             <p>Already have an account? <a >Login</a></p>
// //           </div>
// //         </div>
// //       </div>

// //     </div>
// //   )
// // }




