import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

function SingleOffer() {
  let { id } = useParams();

  const [offerObject, setOfferObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/ofertas/byId/${id}`).then((response) => {
      setOfferObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        { commentBody: newComment, OfertumId: id },
        { headers: { accessToken: sessionStorage.getItem("accessToken") }}
      )
      .then((response) => {
        if(response.data.error){
          console.log(response.data.error)
        }
        else{
          const commentToAdd = { commentBody: newComment, usuario: response.data.usuario };
        setComments([...comments, commentToAdd]);
        setNewComment("");

        }
        
      });
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <p>Usuario : {offerObject.id_usuario}</p>
          <Typography variant="h4" component="h4">
            {offerObject.titulo}
          </Typography>
          <Typography variant="h5" component="h5">
            {offerObject.descripcion}
          </Typography>
          <p>Oferta creada el {offerObject.updatedAt}</p>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <p>Usuario : {offerObject.id_usuario}</p>
          <Typography variant="h4" component="h4">
            Seccion de comentarios
          </Typography>
          <div className="">
            <input
              type="text"
              placeholder="comment.."
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
              value={newComment}
            />
            <button onClick={addComment}>Comment</button>
          </div>
          <div className="">
            {comments.map((comment, key) => {
              return (
                <div key={key} className="comment">
                  <h3>{comment.usuario}</h3>
                  <p>{comment.commentBody}</p>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleOffer;
