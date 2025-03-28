import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { toggleTheme } from "../store/slice";
import lightLogo from "../../public/logo/light-logo.svg";
import darkLogo from "../../public/logo/dark-logo.svg";
import dark from "../../public/icon/dark-icon.svg";
import light from "../../public/icon/light-icon.svg";
import styles from "../styles/styles.module.scss";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <header className={styles.header}>
      <figure>
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Framework Team"
        />
      </figure>
      <button
        className={styles.iconContainer}
        onClick={() => dispatch(toggleTheme())}
      >
        <img
          className={styles.iconTheme}
          src={theme === "light" ? dark : light}
          alt={theme}
        />
      </button>
    </header>
  );
};

export default Header;
