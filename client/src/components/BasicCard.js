import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div>
     
      <Card sx={{ minWidth: 200 }}>
     
     <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Oferta
       </Typography>
       <Typography variant="h5" component="div">
         Titulo de la oferta
       </Typography>
       <Typography sx={{ mb: 1.5 }} color="text.secondary">
         <br></br>
         Descripcion de la oferta
       </Typography>

     </CardContent>
     <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>

    </div>
    
  );
}