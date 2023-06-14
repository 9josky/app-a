import Card from "../CardOne/CardOne";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import styles from "./CardTwo.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Card
        imgUrl="https://tinyurl.com/3daa339w"
        title="React: The Documentary"
        link="https://www.youtube.com/watch?v=8pDqJVdNa44"
        description="The origin story of React"
        icon=<MdOutlineFavoriteBorder />
      />

      <Card
        imgUrl="https://tinyurl.com/m7kf2aj4"
        title="Rethinking Best Practices"
        link="https://www.youtube.com/watch?v=x7cQ3mrcKaY"
        description="Pete Hunt (2013)"
        icon=<MdOutlineFavoriteBorder />
      />

      <Card
        imgUrl="https://tinyurl.com/m7kf2aj4"
        title="Introducing React Native"
        link="https://www.youtube.com/watch?v=KVZ-P-ZI6W4"
        description="Tom Occhino (2015)"
        icon=<MdOutlineFavoriteBorder />
      />

      <Card
        imgUrl="https://tinyurl.com/m7kf2aj4"
        title="Introducing React Hooks"
        link="https://www.youtube.com/watch?v=V-QO-KO90iQ"
        description="Sophie Alpert and Dan Abramov (2018)"
        icon=<MdOutlineFavoriteBorder />
      />

      <Card
        imgUrl="https://tinyurl.com/m7kf2aj4"
        title="Introducing Server Components"
        link="https://www.youtube.com/watch?v=TQQPAU21ZUw"
        description="Dan Abramov and Lauren Tan (2020)"
        icon=<MdOutlineFavoriteBorder />
      />
    </div>

    // </div>
  );
};

export default Cards;
