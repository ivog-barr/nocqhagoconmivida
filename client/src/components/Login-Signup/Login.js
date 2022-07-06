import React from "react";
import { Avatar, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField,Button, Typography, Link } from "@mui/material";


import "./Login.css"

const Login = (props) => {
 

  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatarStyle">
            
          </Avatar>
          <h2>Iniciar Sesion</h2>
        </Grid>

        <form action="#">
        <TextField
          
          label="Filled"
          variant="filled"
          placeholder="Enter Username"
          fullWidth
          required={true}
          
        />

        <TextField
         
          label="Filled"
          variant="filled"
          placeholder="Enter Password"
          fullWidth
          required={true}
          type="password"
          
        />

        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </FormGroup>

        <Button className="btn-style" type="submit" color="primary" fullWidth variant="contained"  >Sign in</Button>

        <Typography component={"span"}>
            <Link href="#" >Registrate!</Link>
        </Typography>

        <Typography component={"span"}>
            <Link href="#" >¿Olvidaste tu contraseña?</Link>
        </Typography>
          
        </form>

 
      </Paper>
    </Grid>
  );
};

export default Login;