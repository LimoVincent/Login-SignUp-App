import React, { useState } from 'react'
export default function Form() {
  const [values, SetValues] = useState([
    { firsName: '' },
    { lastName: '' },
    { userName: '' },
    { email: '' },
    { password: '' },
  ])

  return (
    <div>
      <form className='signUpForm'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          placeholder='First Name '
          onChange={hadleChange}
        ></input>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          placeholder='Last Name '
          value={SetValues(values.firstName)}
          onChange={handleChange}
        ></input>
        <label htmlFor='userName'>User Name :</label>
        <input
          type='text'
          placeholder='User Name '
          value={SetValues(values.userName)}
          onChange={handleChange}
        ></input>
        <label htmlFor='email'>Email addr :</label>
        <input
          type='email'
          placeholder='Email '
          value={null}
          onChange={handleChange}
        ></input>
        Password :
        <input
          type='password'
          placeholder='Password'
          value={}
          onChange={handleChange}
        ></input>
        <button>Sign Up</button> <br></br>
        <button>Sign In Instead</button>
      </form>
    </div>
  )
}
