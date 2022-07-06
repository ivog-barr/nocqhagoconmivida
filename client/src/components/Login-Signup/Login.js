import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

import axios from "axios";

import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
 const [ usuario, setUsername] =  useState("")
 const [ clave, setPassword] =  useState("")

 let navigate = useNavigate()


 const login = ()=>{
  const data = {usuario:usuario, clave:clave}
  axios.post("http://localhost:3001/auth/login",data).then((response)=>{
    if(response.data.error){
      alert(response.data.error)
    }
    else{
      sessionStorage.setItem("accessToken",response.data)
      navigate('/ofertas')
    }
  })

 }
 
  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatarStyle"></Avatar>
          <h2>Iniciar Sesion</h2>
        </Grid>

        <form action="#" >
          <TextField
         
            label="Usuario"
            variant="filled"
            placeholder="Enter Username"
            fullWidth
            required={true}
            onChange={(event)=>{ setUsername(event.target.value)}}
            
          />

          <TextField
         
            label="Password"
            variant="filled"
            placeholder="Enter Password"
            fullWidth
            required={true}
            type="password"
            onChange={(event)=>{ setPassword(event.target.value)}}
           
          />

        

          <Button
          onClick={login}
            className="btn-style"
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
          >
            Sign in
          </Button>

          <div className="footer-signup">

          <Typography component={"span"}>
            <Link href="#">Registrate!</Link>
          </Typography>

          <Typography component={"span"}>
            <Link href="#">¿Olvidaste tu contraseña?</Link>
          </Typography>
          </div>


        
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
