// import Search from "../SearchBar/SearchBar";
import BrowserInput from "../BrowserInput/BrowserInput";
import styles from "./Header.module.css";

// import { BsLockFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* <div className={styles.search}> */}
      <BrowserInput />
      {/* </div> */}
    </div>
  );
};

export default Header;
