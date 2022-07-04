import { Card } from '@mui/material'
import React from 'react'
import BasicCard from './BasicCard'
import Grid from '@mui/material/Grid'

function Ofertas() {
  return (
    <div>
        <h1>Pagina de ofertas</h1>
        <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={3}>
        <BasicCard/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3}>
        <BasicCard/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3}>
        <BasicCard/>
    </Grid>
    <Grid item xs={12} sm={6}  md={3}>
        <BasicCard/>
    </Grid>
   </Grid>

    </div>
   
  )
}

export default Ofertas