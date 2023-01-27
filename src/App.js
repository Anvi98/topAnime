import { Routes, Route, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Anime from "./pages/Anime";
import Home from "./pages/Home";

import styles from "./App.module.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [searchAnimes, setSearchAnimes] = useState([]);
  const location = useLocation();
  const value = location.state;
  const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;

  
  useEffect(()=>{
    handleRedirect(value);
  }, [value]);

  const handleRedirect = (value) =>{
    setTitle(value);
    searchAnime(url);
    setTitle('');
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const searchAnime = async (url) => {
    const response = await fetch(url);
    const animes = await response.json();
    console.log(animes.data);
    setSearchAnimes(animes.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchAnime(url);
    setTitle('');

  }
  return (
  <div className={styles.containerApp}>
  <Header title={title} handleChange={handleChange} handleSubmit={handleSubmit}/>
  <Routes>
    <Route path="/" element={<Home searchAnimes={searchAnimes}/>}/>
    <Route path="/anime/:id" element={<Anime/>}/>
  </Routes>
  </div>)
}

export default App;
