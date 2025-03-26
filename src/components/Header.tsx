import logo from '../../public/logo/logo.svg';
import dark from '../../public/icon/dark-icon.svg'
import styles from '../styles/styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Framework Team" />
      </div>
      <div className={styles.iconContainer}>
        <img className={styles.iconTheme} src={dark} alt="поменять потом при смене темы" />
      </div>
    </header>
  )
}

export default Header