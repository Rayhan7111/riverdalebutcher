import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

function Delivery() {

  const[firstName, setfirstName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleData = (event) => {
    event.preventDefault();

    // const form = event.target;
    // setfirstName(form.firstName.value)
    // setEmail(form.email.value)
    // setPassword(form.password.value)
    console.log(firstName,email,password)
  }

  return (
    <div>
      <Box>

        <form onSubmit={handleData}>

        <TextField
        id="firstname"      
        margin='normal'
        required
        type="text"
        label="firstname"
        name="firstname"
        onChange={(event) => setfirstName(event.target.value)}
        value = {firstName}
        />

        <TextField
        id="email"      
        margin='normal'
        required
        label="Email Address"
        name="email"
        autoComplete="email"
        onChange={(event) => setEmail(event.target.value)}
        value = {email}
        />

        <TextField
        id="password"      
        margin='normal'
        required
        label="password"
        name="password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value = {password}
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