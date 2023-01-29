import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";

import styles from "./Home.module.css";


const Home = (props) => {
  const {url} = props;
  const { data } = useFetch(url);

  return ( 
  <>
    <div className={styles.container}>
      {
        data?.length > 0 ?
        data.map(anime => (
          <Link to={`/anime/${anime.mal_id}`} className={styles.animeCard}>
          <p className={styles.score}>{anime.score}</p> 
          <div className={styles.anime}>
            <img src={anime.images.jpg.image_url ? anime.images.jpg.image_url: 'https://via.placeholder.com/300'} alt={anime.title} />
            <p key={anime.mal_id} className={styles.titleAnime}>{anime.title}</p>©
          </div>
          </Link>
        )) : <h2>No Anime</h2>
      }
      </div>
        {/* // data.map(anime => (
        //   <Link to={`/anime/${anime.mal_id}`} className={styles.animeCard}> 
        //   <p className={styles.score}>{anime.score}</p>
        //   <div className={styles.anime}>
        //     <img src={anime.images.jpg.image_url ? anime.images.jpg.image_url: 'https://via.placeholder.com/300'} alt={anime.title} />
        //     <p key={anime.mal_id} className={styles.titleAnime}>{anime.title}</p>
        //   </div>

        //   </Link>
        // )) */}

  </> );
}
 
export default Home;