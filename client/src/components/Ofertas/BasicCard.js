import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



export default function BasicCard(props) {
  let navigate = useNavigate()
  return (
    <div>
     
      <Card sx={{ minWidth: 200 }}>
     
     <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.usuario}
       </Typography>
       <Typography variant="h5" component="div">
         {props.title}
       </Typography>
       <Typography sx={{ mb: 1.5 }} color="text.secondary">
         <br></br>
        {props.description}
       </Typography>

     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>{navigate(`/ofertas/${props.id}`)}}>Ver mas sobre oferta</Button>
     </CardActions>
   </Card>

    </div>
    
  );
}