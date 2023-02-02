import { Button, TextField, Typography, Card, CardContent, Grid } from '@mui/material'
import React, { useState } from 'react'
import './Delivery.css' 

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
    <div className='delivery-container'>
      <Typography gutterBottom variant="h3" align="center">
        Delivery
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={1}>

            <Grid xs ={12} sm= {6} item>
            <TextField label="First Name" placeholder="Enter Your First Name" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} sm= {6} item>
            <TextField label="Surname" placeholder="Enter Your Surname" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} item>
            <TextField label="Email" placeholder="Enter Your Email" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} sm= {6} item>
            <TextField type = "email" label="Password" placeholder="Enter first name" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>


          </Grid>
        </CardContent>
      </Card> 
        <form onSubmit={handleUser}>

        <Button variant="contained" type='submit'>
          Send
        </Button>
        </form>
      
    </div>  
  )
}

export default Delivery