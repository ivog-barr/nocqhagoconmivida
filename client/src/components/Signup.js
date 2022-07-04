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

const Signup = (props) => {

   

    const validationSchema = yup.object({
        nombre:yup.string().required("El nombre es requerido"),
        apellido:yup.string().required("El apellido es requerido"),
        correo:yup.string().email("Ingrese un email valido").required("Email es requerido"),
        usuario:yup.string().required("El usuario es requerido"),
        clave:yup.string().required("La contrasena es requerida"),
        repeatPass:yup.string().required("La contrasena es requerida").oneOf([yup.ref('clave')],"Las contrasenas deben ser iguales!"),


    })
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      usuario: "",
      clave: "",
      repeatPass: ""
    },
    onSubmit: (values) => {
     axios.post("http://localhost:3001/signUp",values).then(()=>{
        console.log("It worked :))")

     })
    },
    validationSchema : validationSchema
  });

  return (
    <Grid>
      <Paper elevation={20} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatar-style"></Avatar>

          <h2 className="headerStyle">Nuevo usuario</h2>
          <Typography component={"span"} variant="caption">
            Para crear cuenta rellene el formulario
          </Typography>
        </Grid>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            variant="filled"
            required={true}
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            error={formik.touched.nombre && Boolean (formik.errors.nombre)}
            helperText ={formik.touched.nombre && formik.errors.nombre}
          />
          <TextField
            fullWidth
            label="Apellido"
            variant="filled"
            required={true}
            name="apellido"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            error={formik.touched.apellido && Boolean (formik.errors.apellido)}
            helperText ={formik.touched.apellido && formik.errors.apellido}
          />
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            required={true}
            name="correo"
            value={formik.values.correo}
            onChange={formik.handleChange}
            error={formik.touched.correo && Boolean (formik.errors.correo)}
            helperText ={formik.touched.correo && formik.errors.correo}
          />
          <TextField
            fullWidth
            label="Nombre de usuario"
            variant="filled"
            required={true}
            name="usuario"
            value={formik.values.usuario}
            onChange={formik.handleChange}
            error={formik.touched.usuario && Boolean (formik.errors.usuario)}
            helperText ={formik.touched.usuario && formik.errors.usuario}
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="filled"
            type="password"
            required={true}
            name="clave"
            value={formik.values.clave}
            onChange={formik.handleChange}
            error={formik.touched.clave && Boolean (formik.errors.clave)}
            helperText ={formik.touched.clave && formik.errors.clave}
          />

          <TextField
            fullWidth
            label="Repetir contraseña"
            type="password"
            variant="filled"
            required={false}
            name="repeatPass"
            value={formik.values.repeatPass}
            onChange={formik.handleChange}
            error={formik.touched.repeatPass && Boolean (formik.errors.repeatPass)}
            helperText ={formik.touched.repeatPass && formik.errors.repeatPass}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked={true} />}
              label="Acptar terminos y condiciones"
            />
          </FormGroup>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
