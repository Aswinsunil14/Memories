import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography,Container, TextField } from '@material-ui/core';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import makeStyles from './styles';
import Input from './Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { AUTH, LOGOUT } from '../../constants/actionTypes'



const Auth = () => {
    const classes = makeStyles();
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)

    // const isSignup = true;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )


    const handleSubmit = () => {

    };
    const handleChange = () => {

    }
    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      handleShowPassword(false);
    }
    const googleSuccess = async (credentialResponse ) => {
      const result = credentialResponse?.clientId;
      const token = credentialResponse?.credential;
        console.log(credentialResponse?.clientId.profileObj);
        try {
          dispatch({type: AUTH, data: {result, token}})
        } catch (error) {
          console.log(error);
        }}

      const googleFailure = (error) => {
        console.log(error);
        console.log('Login Failed');
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
          <Button className={classes.googleButton} fullWidth color='primary' startIcon={<Icon />} >
        <GoogleLogin 
        onSuccess={googleSuccess}
        onFailure={googleFailure}    
          />
          </Button>
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