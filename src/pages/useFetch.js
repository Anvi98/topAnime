import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState([]);
  // const url = "https://api.jikan.moe/v4/top/anime"
  // const url1 = "https://api.jikan.moe/v4/anime/41467/full"
  // const url3 = "https://api.jikan.moe/v4/anime?q=naruto&sfw"

  const searchAnime = async (url) => {
    const response = await fetch(url);
    const animes = await response.json();
    // console.log(animes.data);
    setData(animes.data);
  }

  useEffect(()=> {
    searchAnime(url);
  }, [url]);

  return {data};
}
 
export default useFetch;