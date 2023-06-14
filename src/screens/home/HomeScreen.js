// import Header from "../../components/Header/Header.js";
import Header from "../../components/Header/Header";
import Fullpage from "../../components/FullPage/Fullpage";

import styles from "./HomeScreen.module.css"

const HomeScreen = () => {
    return (
        <div className={styles.homeScreen}>
            <Header />
            <Fullpage />
        </div>
    );
}

export default HomeScreen;