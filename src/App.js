import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import { update } from "./feature/titleSlice";

import styles from "./App.module.css";

const App = () => {
  const [searchAnimes, setSearchAnimes] = useState([]);
  const dispatch = useDispatch();
  const title = useSelector(state => state.title.title);
  const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;

  useEffect(()=> {
    HomeData();
  }, []);

  const HomeData = () => {
    searchAnime(url);
  }

  const handleChange = (e) => {
    dispatch(update(e.target.value));
  }

  const searchAnime = async (url) => {
    const response = await fetch(url);
    const animes = await response.json();
    console.log(animes.data);
    setSearchAnimes(animes.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update(e.target.value));
    searchAnime(url);
  }

  
  return (
  <div className={styles.containerApp}>
  <Header handleChange={handleChange} handleSubmit={handleSubmit}/>
  <Routes>
    <Route exact path="/topAnime" element={<Home searchAnimes={searchAnimes}/>}/>
    <Route path="/anime/:id" element={<Anime/>}/>
  </Routes>
  </div>)
}

export default App;
