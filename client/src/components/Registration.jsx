import axios from 'axios';
import React, { useState } from 'react';
// import httpClient from "../httpClient";
export const Registration = () => {
    const [ firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/register",{
            email : email,
            first_name : firstName,
            last_name : lastName
        })
        .then(res =>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
  return (
      <div>
          <form onSubmit={onSubmitHandler}>
              <div>
                  <label htmlFor="firstName">First Name :</label>
                  <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div>
                  <label htmlFor="lastName">Last Name :</label>
                  <input type="text" onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div>
                  <label htmlFor="email">Email :</label>
                  <input type="text" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <button>Submit</button>
          </form>
      </div>
  )
};
