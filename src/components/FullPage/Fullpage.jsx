import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import SearchItem from "../Search/SearchItem";
import Cards from "../CardTwo/CardTwo";

import styles from "./Fullpage.module.css";

const Fullpage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <SearchItem />
      <Cards />
    </div>
  );
};

export default Fullpage;
