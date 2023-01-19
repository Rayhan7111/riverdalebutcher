import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

function Delivery() {
  
  const[user, setUser] = useState({});

  const handleUser = (event) => {

    event.preventDefault();
    const form = event.target;
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    })

    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        alert('user added sucessfully')
        form.reset();
      }
      //console.log(data)
    })
  }

  const handleData = (event) => {

    const form = event.target;
    const field = form.name; //field = firstname 
    const value = form.value;// value =  inputed value on client side
    const newUser = {...user};
    newUser[field] = value;
    setUser(newUser);

    // const form = event.target;
    // setfirstName(form.firstName.value)
    // setEmail(form.email.value)
    // setPassword(form.password.value)

  }

  return (
    <div>
      <Box>

        <form onSubmit={handleUser}>

        <TextField
        id="firstname"      
        margin='normal'
        required
        type="text"
        label="firstname"
        name="firstname"
        onBlur={handleData}
        />

        <TextField
        id="email"      
        margin='normal'
        required
        label="Email Address"
        name="email"
        autoComplete="email"
        onBlur={handleData}
        />

        <TextField
        id="password"      
        margin='normal'
        required
        label="password"
        name="password"
        type="password"
        onBlur={handleData}
        />

        <Button variant="contained" type='submit'>
          Send
        </Button>
        </form>
        
      </Box>  
    </div>  
  )
}

export default Delivery