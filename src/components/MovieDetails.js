import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from 'react';
import { API } from "../global";

export function MovieDetails() {
   
    const { id } = useParams();

    const [movie, setMovie] = useState([]);
 
    useEffect(() => {
        fetch(`${API}/movies/${id}`, {
            method: "GET"
        })
            .then(data => data.json())
            .then(movie => setMovie(movie));
    }, [])
  
    const styles = {
        color: movie.rating >= 8.5 ? "green" : "red",
    };
        const navigate = useNavigate();
    return (
        <div>
            <iframe
                width="100%"
                height="800px"
                src={movie.trailer}
                title="Avatar | Back in Theatres | Official Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div className='movie-detail-container'>
                <div className='movie-specs'>
                    <h2 className='movie-name'>{movie.name}</h2>
                    <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
                </div>
                <p className='movie-summary'>{movie.summary}</p>
                <Button
                    startIcon={<KeyboardBackspaceIcon />}
                    variant="contained" onClick={() => navigate(-1)}>Back</Button>
            </div>
        </div>
    );
}
