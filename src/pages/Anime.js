import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

import styles from './Anime.module.css';

const Anime = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const [images, setImages] = useState("");
  const { title, rank, rating, score, episodes, popularity, type, synopsis, year} = data;
  
  setTimeout(()=> {
    const {image_url} =  data.images.jpg;
    setImages(image_url);
  },1000);


  return ( 
  <>
     <div className={styles.anime_details}>
      <div className={styles.basic_info}>
        <img src={images} alt={title} />
        <div className={styles.information}>
          <h1>{title}</h1> 
          <div className={styles.test}><div className={styles.info1}>Rank</div><div className={styles.info_value1}>{rank}</div></div>
          <div className={styles.test}><div className={styles.info}>Year</div> <div className={styles.info_value}>{year}</div></div>
          <div className={styles.test}><div className={styles.info}>Rating</div><div className={styles.info_value}> {rating}</div></div>
          <div className={styles.test}><div className={styles.info}>Score</div> <div className={styles.info_value}>{score}</div></div>
          <div className={styles.test}><div className={styles.info}>Episodes</div> <div className={styles.info_value}>{episodes}</div></div>
          <div className={styles.test}><div className={styles.info}>Popularity</div><div className={styles.info_value}> {popularity}</div></div>
          <div className={styles.test}><div className={styles.info}>Type</div> <div className={styles.info_value}>{type}</div></div>
        </div>
      </div>   

      <div className={styles.synopsis}>
        <h2>Synopsis</h2>
        <p>{synopsis}</p>
      </div>
    </div> 

  </> 
  );
}
 
export default Anime;