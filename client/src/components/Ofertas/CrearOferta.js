import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
  } from "@mui/material";
  import '../Login-Signup/Signup.css'
  import * as yup from "yup";
  import { useFormik } from "formik";
  import axios from 'axios'
import { useNavigate } from "react-router-dom";
  
  
  const CrearOferta = (props) => {

     let navigate = useNavigate()
  
     
  
      const validationSchema = yup.object({
          titulo:yup.string().required("El titulo es requerido"),
          descripcion:yup.string().required("La descripcion  es requerido"),

      })
    const formik = useFormik({
      initialValues: {
        titulo: "",
        descripcion: "",

      },
      onSubmit: (values) => {
        axios.post("http://localhost:3001/ofertas",values).then(()=>{
            console.log("It worked :))")
            navigate('/ofertas')
          
    
         },[])
      },
      validationSchema : validationSchema
    });
  
    return (
      <Grid>
        <Paper elevation={20} className="paperStyle">
          <Grid align="center">
            <Avatar className="avatar-style"></Avatar>
  
            <h2 className="headerStyle">Nueva oferta</h2>
            <Typography component={"span"} variant="caption">
              Para crear una oferta rellene el formulario
            </Typography>
          </Grid>
  
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Titulo"
              variant="filled"
              required={true}
              name="titulo"
              value={formik.values.titulo}
              onChange={formik.handleChange}
              error={formik.touched.titulo && Boolean (formik.errors.titulo)}
              helperText ={formik.touched.titulo && formik.errors.titulo}
            />
            <TextField
              fullWidth
              label="Descripcion"
              variant="filled"
              required={true}
              name="descripcion"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              error={formik.touched.descripcion && Boolean (formik.errors.descripcion)}
              helperText ={formik.touched.descripcion && formik.errors.descripcion}
            />

            
  
        
            <Button type="submit" variant="contained" color="primary" fullWidth >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    );


  };

  export default CrearOferta