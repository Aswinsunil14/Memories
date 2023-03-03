import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography,Container, TextField } from '@material-ui/core';
import makeStyles from './styles';
import Input from './Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'



const Auth = () => {
    const classes = makeStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)

    // const isSignup = true;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )


    const handleSubmit = () => {

    };
    const handleChange = () => {

    }
    const switchMode = () => {

    }

  return (
   <Container component="main" maxWidth="xs" >
     <Paper className={classes.paper} elevation={3} >
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant='h5' > {isSignup ? 'Sign Up' : 'Sign In' }</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {
            isSignup && (
              <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half  />
              <Input name="firstName" label="First Name" handleChange={handleChange} half />

              </>
            )}
            <Input name='email' label="Email Address" handleChange={handleChange} type="email"  />
            <Input name='password' label='password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} type="password" />}
        </Grid>
        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
          {isSignup ? "Sign up" : "Sign In"}
        </Button>
        <Grid container justifyContent='flex-end' >
          <Button onClick={switchMode} >
            {isSignup ? "Already Have an Account? Sign In" : "Dont have an Account"}
          </Button>
        </Grid>
      </form>
     </Paper>
   </Container>
  )
}

export default Auth