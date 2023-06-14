import Search from "../SearchBar/SearchBar";
// import styles from "./BrowserInput.module.css";

import { BsLockFill } from "react-icons/bs";

const BrowserInput = () => {
  return (
    <Search
      icon={<BsLockFill />}
      web={"example.com/"}
      address={"videos.html"}
    ></Search>
  );
};

export default BrowserInput;
