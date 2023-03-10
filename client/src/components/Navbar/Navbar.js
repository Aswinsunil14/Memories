import React from 'react'
import {Link} from "react-router-dom"
import { AppBar, Typography, Grow, Grid, Toolbar, Avatar, Button} from '@material-ui/core';
import memories from '../../images/memories.png'

import makeStyles from './styles';

const Navbar = () => {
  const classes = makeStyles(); 
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
    <img className={classes.image} src={memories} alt="memories" height={60} width={60}/>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAlt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
            <Button variant='contained' className={classes.logout} color="secondary" >Logout</Button>
          </div>

        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Signin</Button>
        )}
      </Toolbar>
</AppBar>
  
  )
}

export default Navbar