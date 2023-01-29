import { Link } from "react-router-dom";
// import { useFetch } from "./useFetch";

import styles from "./Home.module.css";


const Home = (props) => {
  const {searchAnimes} = props;
  // const { data } = useFetch("https://api.jikan.moe/v4/top/anime");
  console.log(searchAnimes);

  return ( 
  <>
    <div className={styles.container}>
      {
        searchAnimes.map(anime => (
          <Link to={`/anime/${anime.mal_id}`} className={styles.animeCard}>
          <p className={styles.score}>{anime.score}</p> 
          <div className={styles.anime}>
            <img src={anime.images.jpg.image_url ? anime.images.jpg.image_url: 'https://via.placeholder.com/300'} alt={anime.title} />
            <p key={anime.mal_id} className={styles.titleAnime}>{anime.title}</p>©
          </div>
          </Link>
        )) 
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