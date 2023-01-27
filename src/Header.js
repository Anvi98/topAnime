import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  const {title, handleChange, handleSubmit}= props;

  return ( 
  <>
  <div className={styles.container}>
    <Link to="/" className={styles.title}>WATCH <span className={styles.topTitle}>TOP ANIME</span></Link>
      <form onSubmit={handleSubmit}>
      <input type="text" value ={title} onChange={handleChange} placeholder="one piece, shingeki..." className={styles.inputBar} />
      <Link to="/" state={title}><button type="submit" className={styles.searchButton}>Search</button></Link>
    </form>
  </div>
  </> );
}
 
export default Header;