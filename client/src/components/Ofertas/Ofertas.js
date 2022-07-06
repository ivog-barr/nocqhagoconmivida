
import React from "react";
import BasicCard from "./BasicCard";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";

function Ofertas() {
  const [listOfOffers, setListOfOffers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/ofertas").then((response) => {
      setListOfOffers(response.data);
    });
  },[]);
  return (
    <div>
      <h1>Pagina de ofertas</h1>

      <Grid container spacing={2}>
        {listOfOffers.map((value, key) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <BasicCard
                title={value.titulo}
                description={value.descripcion}
                usuario={value.id_usuario}
                id ={value.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Ofertas;
