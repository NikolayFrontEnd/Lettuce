import SearchIcon from "../icons/SearchIcon";
import style from "./SearchBar.module.css";

export const SearchBar = () => (
  <div className={style.toolbar__search}>
    <div className={style.toolbar__searchBlock}>
      <SearchIcon />
      <input className={style.toolbar__searchinput} placeholder="Search" />
    </div>
    <button className={style.toolbar__searhcbutton}>Search</button>
  </div>
);
