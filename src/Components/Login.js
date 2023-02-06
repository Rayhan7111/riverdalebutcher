import React from 'react'
import './login.css'
import { useLoaderData} from "react-router-dom";

function Login() {

  const users = useLoaderData();
  // console.log(useSearchParams);

  return (
    <div className='login-container'>
      <div className='container'>
        <h1>Log in to Your Account</h1>
        {
          users.map(user => 
          
          <li>
            <ol>
              <p>{user.firstname}</p>
              <p>{user.surname}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.message}</p>
            </ol>
          </li>

          )//user has all data from backend and here in a parameter we deine every object a loop goes through each object all the objects are then dispaly in the<p> tag

        }
      </div>
    </div>
  )
}

export default Login