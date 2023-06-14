import Search from "../SearchBar/SearchBar";
import { CiSearch } from "react-icons/ci";

import styles from "./SearchItem.module.css";

const SearchItem = () => {
  return (
    <div className={styles.container}>
      <Search icon={<CiSearch />} web={"Search"} />
    </div>
  );
};

export default SearchItem;
