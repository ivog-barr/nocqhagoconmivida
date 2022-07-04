import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
  } from "@mui/material";
  import "./Signup.css";
  import * as yup from "yup";
  import { useFormik } from "formik";
  import axios from 'axios'
  import { useEffect } from "react";
  
  const CrearOferta = (props) => {
  
     
  
      const validationSchema = yup.object({
          titulo:yup.string().required("El nombre es requerido"),
          descripcion:yup.string().required("El apellido es requerido"),

      })
    const formik = useFormik({
      initialValues: {
        titulo: "",
        descripcion: "",

      },
      onSubmit: (values) => {
        console.log(values)
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

            
  
        
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    );


  };

  export default CrearOferta