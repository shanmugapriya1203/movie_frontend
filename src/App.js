
import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { AddMovie } from './components/AddMovie';
import { Movielist } from './components/Movielist';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './components/MovieDetails';
import { Home } from './components/Home';
import { MovieEdit } from './components/MovieEdit';
import { NotFound } from './components/NotFound';





function App() {

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate("/")} color="inherit">Home</Button>
              <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
              <Button onClick={() => navigate("/addmovieform")} color="inherit">Add Movie</Button>
              <Button sx={{ marginLeft: "auto" }} startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit">{mode === "light" ? "dark" : "light"} mode</Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/flims" element={<Navigate replace to="/movies" />} />
            <Route path="/movies" element={<Movielist />} />
            <Route path="/addmovieform" element={<AddMovie />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/movies/edit/:id" element={<MovieEdit />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider >
  );
}

export default App;
