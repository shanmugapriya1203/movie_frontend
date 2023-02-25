import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


export function Movie({ movies, id, deletebutton, editbutton }) {

  const styles = {
    color: movies.rating >= 8.5 ? "green" : "red",
  };
  //navigate hook
  const navigate = useNavigate();
  //conditional rendering
  const [show, setShow] = useState(true);
  return (
    <Card className='movie-container'>
      <img className="movie-poster" src={movies.poster} alt={movies.name}></img>
      <CardContent>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movies.name}
            <IconButton onClick={() => setShow(!show)} color="primary" aria-label="toggle">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton onClick={() => navigate(`/movies/${id}`)} color="primary" aria-label="toggle">
              <InfoIcon />
            </IconButton></h2>
          <p style={styles} className='movie-rating'>⭐ {movies.rating}</p>
        </div>
        {show ? <p className='movie-summary'>{movies.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />{editbutton}{deletebutton}
      </CardActions>
    </Card>
  );
}
