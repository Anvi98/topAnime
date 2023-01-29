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
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const title = useSelector(state => state.title.title);
  const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;

  const handleChange = (e) => {
    setInput(e.target.value);

    console.log("onChange...")
  }

  const searchAnime = async (url) => {
    const response = await fetch(url);
    const animes = await response.json();
    console.log(animes.data);
    setSearchAnimes(animes.data);
  }

  const handleSubmit = (e) => {
    if(e.key === "Enter" || e.type === "click"){
      dispatch(update(input));
    }
   // e.preventDefault();


  }
  
  return (
  <div className={styles.containerApp}>
  <Header handleChange={handleChange} handleSubmit={handleSubmit} input={input}/>
  <Routes>
    <Route exact path="/topAnime" element={<Home url={url}/>}/>
    <Route path="/anime/:id" element={<Anime/>}/>
  </Routes>
  </div>)
}

export default App;
