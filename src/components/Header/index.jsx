import styles from "./Header.module.css";
import ignite from "../../assets/ignite.png";


function Header() {
    return(

      <header className={styles.header}>
        <img srcSet={ignite} alt="" />
        <h1>Ignite Feed</h1>
      </header>

    )
}

export default Header;