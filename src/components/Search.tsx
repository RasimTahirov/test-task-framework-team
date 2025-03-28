import search from "../../public/icon/search-icon.svg";
import style from "../styles/styles.module.scss";

interface SearchProps {
  setTitle: (title: string) => void;
}

const Search: React.FC<SearchProps> = ({ setTitle }) => {
  return (
    <div className={style.search} aria-label="search">
      <img className={style.searchIcon} src={search} alt="search" />
      <input
        type="search"
        className={style.searchInput}
        placeholder="Painting title"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default Search;
