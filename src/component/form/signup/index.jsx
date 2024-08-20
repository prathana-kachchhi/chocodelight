import React, { useState } from 'react'
import './signup.scss';
export default function Signup() {
  const [data, setData] = useState()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);
  const handleSubmit = () => {
    localStorage.setItem("data", JSON.stringify(data))
  }
  return (
    <div className='signup'>
      <div className="container">
        <section>
          <h2>hello this is Signup !!</h2>
          <div className="form">
            <label htmlFor="">Username</label>
            <input onChange={handleChange} type="name" name='username' />
            <label htmlFor="">Email</label>
            <input onChange={handleChange} type="email" name='email' />
            <label htmlFor="">password</label>
            <input onChange={handleChange} type="password" name='password' />
            <label htmlFor="">Confirm password</label>
            <input onChange={handleChange} type="password" name='Confirm password' />

            <div onClick={handleSubmit} className="button">
              <button>Sign up</button>
              <p></p>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}
