import logo from "../../public/logo/logo.svg";
import dark from "../../public/icon/dark-icon.svg";
import styles from "../styles/styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} alt="Framework Team" />
      </figure>
      <div className={styles.iconContainer}>
        <img
          className={styles.iconTheme}
          src={dark}
          alt="поменять потом при смене темы"
        />
      </div>
    </header>
  );
};

export default Header;
