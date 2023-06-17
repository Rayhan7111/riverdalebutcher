<<<<<<< HEAD
// import { Button, TextField } from '@mui/material'
// import { Box } from '@mui/system'
=======
import { Button, TextField, Typography, Card, CardContent, Grid } from '@mui/material'
>>>>>>> 9f7fd9a3aa72fe1a8b7b167c2b84ab13a3d93f27
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
<<<<<<< HEAD
    event.preventDefault();
    console.log(firstName,email,password)
  }

  return (
    <div>
    <div>Delivery</div>
    {/* <div>
      <Box>
=======

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
      <Typography gutterBottom variant="h4" align="center">
        Delivery
      </Typography>
>>>>>>> 9f7fd9a3aa72fe1a8b7b167c2b84ab13a3d93f27

      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant='h5'>Contact Us</Typography>
          <Typography gutterBottom variant='body2' color="textSecondary" component="p">Fill up the form and our team will preapre you groceries.</Typography>
          <form onSubmit={handleUser}>
          <Grid container spacing={1}>

            <Grid xs ={12} sm= {6} item>
            <TextField name="firstname" label="First Name" placeholder="Enter Your First Name" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} sm= {6} item>
            <TextField name="surname" label="Surname" placeholder="Enter Your Surname" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} item>
            <TextField name="email" type="email" label="Email" placeholder="Enter Your Email" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

<<<<<<< HEAD
        <Button variant="contained" type='submit'>
          Send
        </Button>
        </form>
        
      </Box>  
    </div> */}
=======
            <Grid xs ={12} item>
            <TextField name="phone" type="number" label="Phone" placeholder="Enter Your phone number" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} item>
            <TextField name="message" label="Message" multiline rows={4} placeholder="Enter Your message" variant="outlined" fullWidth onBlur={handleData} required/>
            </Grid>

            <Grid xs ={12} item>
            <Button type='submit' variant="contained" color='primary' fullWidth>Submit</Button>
            </Grid>
            
          </Grid>
          </form>
        </CardContent>
      </Card> 
>>>>>>> 9f7fd9a3aa72fe1a8b7b167c2b84ab13a3d93f27
    </div>  
  )
}

export default Delivery