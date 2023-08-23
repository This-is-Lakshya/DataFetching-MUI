import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        Your Website {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const defaultTheme = createTheme();

const Form = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobNo, setMobNo] = useState();

  const Nav = useNavigate();

    const handleOnClick = (event)=>{
      event.preventDefault();
      if(!name || !email || !mobNo){
        toast.error("Form is empty!");
        return;
      }

      localStorage.setItem('Name',name);
      localStorage.setItem('Email',email);
      localStorage.setItem('Mob.No',mobNo);

      toast.success('Login Successfull!');
      Nav('/next');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

  return (
    <div className='Form'>

    <ThemeProvider theme={defaultTheme}>
      <Container  component="main" maxWidth="xs">
        <CssBaseline />
        <div id='formBox'>
        <Box 
          sx={{
            marginTop: '20vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            USER FORM
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
        
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Mobile Number"
                  type="phone-number"
                  id="phoneNumber"
                  autoComplete="phone-number"
                  value={mobNo}
                  onChange={(e) => setMobNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree all the Terms & Condition"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOnClick}
            >
              Submit
            </Button>
          </Box>
        </Box>
        </div>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

    </div>
  )
}

export default Form