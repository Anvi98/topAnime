import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { handleChange, handleSubmit}= props;
  const title = useSelector((state) => state.title.title);
  console.log(title)
  return ( 
  <>
  <div className={styles.container}>
    <Link to="/" className={styles.title}>WATCH <span className={styles.topTitle}>TOP ANIME</span></Link>
      <form onSubmit={handleSubmit}>
      <input type="text" value ={title} onChange={handleChange} placeholder="one piece, shingeki..." className={styles.inputBar} />
      <Link to="/"><button type="submit" className={styles.searchButton}>Search</button></Link>
    </form>
  </div>
  </> );
}
 
export default Header;