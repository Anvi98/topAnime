import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { handleChange, handleSubmit, input} = props;
  const title = useSelector((state) => state.title.title);
  console.log(title)
  return ( 
  <>
  <div className={styles.container}>
    <Link to="/topAnime" className={styles.title}>WATCH <span className={styles.topTitle}>TOP ANIME</span></Link>
      <form onKeyDown={handleSubmit}>
        <input type="text" value ={input} onChange={handleChange} placeholder="one piece, shingeki..." className={styles.inputBar} />
        <Link to="/topAnime" ><button className={styles.searchButton} onClick={handleSubmit}>Search</button></Link>
      </form>
  </div>
  </> );
}
 
export default Header;